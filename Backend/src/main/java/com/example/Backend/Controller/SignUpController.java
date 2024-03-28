package com.example.Backend.Controller;

import com.example.Backend.Entity.Customer;
import com.example.Backend.Entity.EmailVerificationToken;
import com.example.Backend.Entity.Roles;
import com.example.Backend.Mail.LogInVerification;
import com.example.Backend.Model.JwtResponse;
import com.example.Backend.Repository.CustomerRepo;
import com.example.Backend.Repository.RoleRepo;
import com.example.Backend.RequestModel.MailToken;
import com.example.Backend.Security.JwtHelper;
import com.example.Backend.Service.CustomerService;
import com.example.Backend.Service.EmailTokenService;
import com.example.Backend.ServiceImpl.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class SignUpController {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    EmailTokenService emailTokenService;

    @Autowired
    LogInVerification mailService;

    @Autowired
    CustomerService customerService;

    @Autowired
    RoleRepo roleRepo;

    @Autowired
    JwtHelper helper;

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    AuthenticationManager manager;

    @PostMapping("/")
    public String add(@RequestBody Customer customer){
        customer.setAuth_type("custom");
        Roles role = roleRepo.findById(1L).orElseThrow();
        List<Roles>roles = new ArrayList<>();
        roles.add(role);
        customer.setRoles(roles);
        customerService.saveCustomer(customer);
        return "OK";
    }

    @PostMapping("/signup")
    public String addCustomer(@RequestBody Customer customer) {

        String email = customer.getEmail();
        Customer c = customerService.findByEmail(email);

        if(c==null){
            Customer customer1 = customer;
            String password = customer.getPassword();
            String ePasssword = passwordEncoder.encode(password);
            customer1.setPassword(ePasssword);
            customer1.setAuth_type("custom");

            Roles role = roleRepo.findById(2L).orElseThrow();
            List<Roles>roles = new ArrayList<>();
            roles.add(role);
            customer1.setRoles(roles);

            int code = (int)(Math.random()*1000000);
            if(code/100000 <= 0)
                code *= 10;

            String token = Integer.toString(code);
            EmailVerificationToken emailVerificationToken = new EmailVerificationToken();
            emailVerificationToken.setCustomer(customer1);
            emailVerificationToken.setToken(token);
            emailVerificationToken.setEmail(customer.getEmail());

            emailTokenService.addEmailToken(emailVerificationToken);

            String body = "Your Verification Code is: "+token;
            mailService.sendEmail(customer.getEmail(),"Verification Code - TrendLoom",body);
            return "OK";
        }
        else
            return "ERROR";

    }

    @PostMapping("/signup/email")
    public ResponseEntity<?> verifyEmail(@RequestBody MailToken mailToken){


        EmailVerificationToken emailVerificationToken = emailTokenService.findByEmail(mailToken.getEmail());
        String token = emailVerificationToken.getToken();
        System.out.println("token" + token+" mailToken "+mailToken.getToken());
        if(token.equals(mailToken.getToken())){


            Customer customer = emailVerificationToken.getCustomer();


//            customerService.saveCustomer(customer);

            UserDetails userDetails = userDetailsService.loadUserByUsername(customer.getEmail());
            String token1 = this.helper.generateToken(userDetails);

            JwtResponse response = new JwtResponse(token1, customer.getName());

            emailTokenService.deleteToken(emailVerificationToken);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        else {
            customerService.deleteCutomer(emailVerificationToken.getCustomer().getCid());
            emailTokenService.deleteToken(emailVerificationToken);
            return ResponseEntity.ok("Error");
        }
    }

    @PostMapping("/signup/auth")
    public ResponseEntity<?> authAddCustomer(@RequestBody Customer cus) {

        String email = cus.getEmail();
        Customer c = customerService.findByEmail(email);

        if (c == null) {

            cus.setAuth_type("auth");
            Roles role = roleRepo.findById(2L).orElseThrow();
            List<Roles> roles = new ArrayList<>();
            roles.add(role);
            cus.setRoles(roles);

            customerService.saveCustomer(cus);
        }
        UserDetails userDetails = userDetailsService.loadUserByUsername(cus.getEmail());

        String token = this.helper.generateToken(userDetails);
        JwtResponse response = new JwtResponse(token, cus.getName());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
