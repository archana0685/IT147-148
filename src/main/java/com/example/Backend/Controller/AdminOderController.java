package com.example.Backend.Controller;

import com.example.Backend.Entity.Orders;
import com.example.Backend.Repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin/order")
@CrossOrigin("*")
public class AdminOderController {

    @Autowired
    OrderRepo orders;

    @GetMapping("/getOrder")
    public ResponseEntity<?> getOrder(){
        System.out.println("getOrder");
        List<Orders>orders1 = orders.findAll();

        return ResponseEntity.ok(orders1);
    }
}
