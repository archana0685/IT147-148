package com.example.Backend.Controller;


import com.example.Backend.Entity.Addr_details;
import com.example.Backend.Entity.Customer;
import com.example.Backend.Repository.AddrrDetailsRepo;
import com.example.Backend.Repository.CustomerRepo;
import com.example.Backend.Security.JwtHelper;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/add")
public class AddrController {

    @Autowired
    AddrrDetailsRepo orderDetailsRepo;

    @Autowired
    JwtHelper jwtHelper;

    @Autowired
    CustomerRepo customerRepo;

    @PutMapping ("/addAddr/{id}")
    public ResponseEntity<?> makeOrder(@PathVariable("id")Long id, @RequestBody Addr_details orderDetails, HttpServletRequest request)
    {
        if(id==0){
        String requestHeader = request.getHeader("Authorization");
        String token = requestHeader.substring(7);
        String username = this.jwtHelper.getUsernameFromToken(token);

        Customer c = customerRepo.findByEmail(username);
        orderDetails.setCustomer(c);
            orderDetailsRepo.save(orderDetails);
        }
        else{
            Addr_details orderDetails1 = orderDetailsRepo.findById(id).orElseThrow();
            orderDetails1.setAddr(orderDetails.getAddr());
            orderDetails1.setCity(orderDetails1.getCity());
            orderDetails1.setMobile_no(orderDetails.getMobile_no());
            orderDetails1.setPincode(orderDetails1.getPincode());
            orderDetails1.setState(orderDetails.getState());
            orderDetails1.setTown(orderDetails.getTown());

            orderDetailsRepo.save(orderDetails1);
        }
        return ResponseEntity.ok("OK");
    }

    @GetMapping("/checkAddr")
    public ResponseEntity<?> checkAddr(HttpServletRequest request){

        System.out.println("Inside check ADD");

        String requestHeader = request.getHeader("Authorization");
        String token = requestHeader.substring(7);
        String username = this.jwtHelper.getUsernameFromToken(token);

        Customer c = customerRepo.findByEmail(username);
        Addr_details addr = orderDetailsRepo.findOrder_detailsByCustomer(c);

        if(addr==null){
            return ResponseEntity.ok(null);
        }
        else {
            return ResponseEntity.ok(addr);
        }
    }

    @PostMapping("/updateAddr")
    public ResponseEntity<?>updateAddr(@RequestBody Addr_details orderDetails){
        return ResponseEntity.ok("OK");
    }

}
