package com.example.Backend.Controller;

import com.example.Backend.Entity.Customer;
import com.example.Backend.Entity.Roles;
import com.example.Backend.Mail.LogInVerification;
import com.example.Backend.Model.JwtResponse;
import com.example.Backend.Repository.CustomerRepo;
import com.example.Backend.Repository.RoleRepo;
import com.example.Backend.Security.JwtHelper;
import com.example.Backend.ServiceImpl.CustomerImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.Role;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/signUp")
public class SignUpController {

    int code;
    Customer customer;

    @Autowired
    CustomerRepo customerRepo;
    @Autowired
    LogInVerification mailService;

    @Autowired
    RoleRepo roleRepo;

    @Autowired
    JwtHelper helper;

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    AuthenticationManager manager;
    CustomerImpl cimpl = new CustomerImpl();

    @PostMapping("/")
    public String add(@RequestBody Customer customer){
        customer.setAuth_type("custom");
        Roles role = roleRepo.findById(1L).orElseThrow();
        List<Roles>roles = new ArrayList<>();
        roles.add(role);
        customer.setRoles(roles);
        customerRepo.save(customer);
        return "OK";
    }

    @PostMapping("/signupCus")
    public String addCustomer(@RequestBody Customer customer) {

        System.out.println("Signup");
        String email = customer.getEmail();
        Customer c = customerRepo.findByEmail(email);
        if(c==null){
            this.customer = customer;
            customer.setAuth_type("custom");
            code = (int)(Math.random()*1000000);

            if(code/100000 < 0)
            {
                code *= 10;
            }
            String body = "Your Verification Code is: "+code;
            mailService.sendEmail(customer.getEmail(),"Verification Code - TrendLoom",body);
            return "OK";
        }
        else
            return "ERROR";

    }

    @PostMapping("/emailVerification")
    public ResponseEntity<?> verifyEmail(@RequestBody String codeU){

        String scode = Integer.toString(code);
        System.out.println(code);

        System.out.println(scode);
        if(codeU.equals(scode)){
            Roles role = roleRepo.findById(2L).orElseThrow();
            List<Roles>roles = new ArrayList<>();
            roles.add(role);
            customer.setRoles(roles);
            customerRepo.save(customer);

            UserDetails userDetails = userDetailsService.loadUserByUsername(customer.getEmail());
            System.out.println(userDetails.getPassword()+userDetails.getUsername()+userDetails.getAuthorities());
            String token = this.helper.generateToken(userDetails);

            System.out.println("Token: "+token);
            JwtResponse response = new JwtResponse(token, customer.getName());

            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        else {
            return ResponseEntity.ok("Error");
        }
    }

    @PostMapping("/signupAuth")
    public ResponseEntity<?> addCustomerA(@RequestBody Customer cus) {

        String email = cus.getEmail();
        Customer c = customerRepo.findByEmail(email);
        if(c==null){

            cus.setAuth_type("auth");
            int pass = (int)(Math.random()*1000000);
            String password = Integer.toString(pass);
            cus.setPassword(password);
            Roles role = roleRepo.findById(2L).orElseThrow();
            List<Roles>roles = new ArrayList<>();
            roles.add(role);
            cus.setRoles(roles);

            customerRepo.save(cus);

            UserDetails userDetails = userDetailsService.loadUserByUsername(cus.getEmail());
            System.out.println(userDetails.getPassword()+userDetails.getUsername());

            String token = this.helper.generateToken(userDetails);
            System.out.println("Token: "+token);
            JwtResponse response = new JwtResponse(token, cus.getName());

            return new ResponseEntity<>(response, HttpStatus.OK);

        }
        else{
            System.out.println("Email...."+email);

            return ResponseEntity.ok("Error");}
    }

}
