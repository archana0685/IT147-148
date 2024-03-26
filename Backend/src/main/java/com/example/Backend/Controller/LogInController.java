package com.example.Backend.Controller;

import com.example.Backend.Entity.Customer;
import com.example.Backend.Model.JwtRequest;
import com.example.Backend.Model.JwtResponse;
import com.example.Backend.Repository.CustomerRepo;
import com.example.Backend.Security.JwtHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/logIn")
public class LogInController {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    JwtHelper helper;

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    AuthenticationManager manager;

    @PostMapping("/LogInCus")
    public ResponseEntity<?> LogInCus(@RequestBody JwtRequest request){

        String email = request.getEmail();
        Customer c = customerRepo.findByEmail(email);

        if(c==null)
            return  ResponseEntity.ok("Account does not exist create new account");
        else if(c.getAuth_type().equals("auth")){
            return ResponseEntity.ok("Incorrect password try to LogIn with Google");
        } else if (!c.getPassword().equals(request.getPassword())) {
            return ResponseEntity.ok("Incorrect password");
        } else{

            UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
            //Customer customer = customerRepo.findByEmail(request.getEmail());
            System.out.println(userDetails.getPassword()+userDetails.getUsername()+userDetails.getAuthorities());
            String token = this.helper.generateToken(userDetails);

            System.out.println("Token: "+token);
            JwtResponse response = new JwtResponse(token, c.getName());

            return new ResponseEntity<>(response, HttpStatus.OK);
        }
    }

    private void doAuthenticate(String email, String password) {

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        try {
            manager.authenticate(authentication);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(" Invalid Username or Password  !!");
        }
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<?> exceptionHandler() {
        return ResponseEntity.ok("Credentials Invalid!!");
    }

    @PostMapping("/LogInAuth")
    public ResponseEntity<?> LogInAuth(@RequestBody JwtRequest request){

        String email = request.getEmail();
        Customer c = customerRepo.findByEmail(email);

        System.out.println(email);
        if(c==null){
            return  ResponseEntity.ok("Account does not exist create new account");
        }
        else{
            String password = c.getPassword();
            UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
            System.out.println(userDetails.getPassword()+userDetails.getUsername());


            String token = this.helper.generateToken(userDetails);
            System.out.println("Token: "+token);
            JwtResponse response = new JwtResponse(token, c.getName());

            return new ResponseEntity<>(response, HttpStatus.OK);
        }
    }
}
