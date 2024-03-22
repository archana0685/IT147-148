package com.example.Backend.Controller;

import com.example.Backend.Entity.Customer;
import com.example.Backend.Entity.ForgetPasswordToken;
import com.example.Backend.Model.ResetPassword;
import com.example.Backend.Mail.LogInVerification;
import com.example.Backend.Model.ForgetPassword;
import com.example.Backend.Repository.CustomerRepo;
import com.example.Backend.Repository.TokenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/forgetP")
public class ForgetPasswordController {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    LogInVerification logInVerification;

    @Autowired
    TokenRepo tokenRepo;

    @PostMapping("/forgotPassword")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgetPassword forgetPassword){
        Customer customer = customerRepo.findByEmail(forgetPassword.getEmail());
        System.out.println(forgetPassword.getUrl()+"?token="+"1202");

        if(customer == null){
            return ResponseEntity.ok("Account does not exists create new account");
        }
        else {
            String url = forgetPassword.getUrl() ;
            int code = (int)(Math.random()*100000);
            String token = String.valueOf(code);
            String body = url+"?token="+token;

            ForgetPasswordToken forgetPassword1 = new ForgetPasswordToken();
            forgetPassword1.setCustomer(customer);
            forgetPassword1.setToken(token);
            tokenRepo.save(forgetPassword1);
            logInVerification.sendEmail(customer.getEmail(),"Reset Password Url : ",body);

            return ResponseEntity.ok("OK");
        }
    }

    @PostMapping("/resetPassword")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPassword r){
        ForgetPasswordToken  f = tokenRepo.findForgetPasswordTokenByToken(r.getToken());

        System.out.println(f);
        if(f==null)
            return ResponseEntity.ok("Unauthorized User");
        else{
            Customer c = f.getCustomer();
            c.setPassword(r.getPassword());
            customerRepo.save(c);
//            tokenRepo.delete(f);
            return ResponseEntity.ok("OK");
        }
    }

}
