package com.example.Backend.Controller;

import com.example.Backend.Entity.Orders;
import com.example.Backend.Repository.AddrrDetailsRepo;
import com.example.Backend.Repository.CartRepo;
import com.example.Backend.Repository.CustomerRepo;
import com.example.Backend.Repository.OrderRepo;
import com.example.Backend.Security.JwtHelper;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    OrderRepo orderRepo;

    @Autowired
    AddrrDetailsRepo orderDetailsRepo;

    @Autowired
    JwtHelper jwtHelper;

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    CartRepo cartRepo;

    @PostMapping("/makePayment")
    public String createOrder(@RequestBody String amount){
        System.out.println("Oderder obj .............");

        Order order;
        try {
            RazorpayClient razorpay = new RazorpayClient("rzp_test_2fB7s8LlAuJ7HT","hJclVqRtuCLXwoVM19tF5ICk");
            JSONObject orderObj = new JSONObject();

            float amt = Float.parseFloat(amount);
            orderObj.put("amount",amt*100);
            orderObj.put("currency","INR");
            orderObj.put("receipt","receipt#1");

            order = razorpay.orders.create(orderObj);
            System.out.println(order);
            return order.toString();
        }
        catch (Exception e){

            System.out.println(e.getMessage());
            return "error";
        }
    }
}
