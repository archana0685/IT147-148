package com.example.Backend.Controller;

import com.example.Backend.Entity.*;
import com.example.Backend.Mail.LogInVerification;
import com.example.Backend.Model.Payment;
import com.example.Backend.Repository.*;
import com.example.Backend.Security.JwtHelper;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Controller
@CrossOrigin("*")
@RequestMapping("/order")
public class OrderDetailsController {

    @Autowired
    JwtHelper jwtHelper;

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    CartRepo cartRepo;

    @Autowired
    OrderRepo orderRepo;

    @Autowired
    OrderItemsRepository orderItemsRepository;

    @Autowired
    AddrrDetailsRepo addrrDetailsRepo;

    @Autowired
    LogInVerification mailService;


    @PostMapping("/createOrder")
    public ResponseEntity<?>createOrder(@RequestBody Payment payment, HttpServletRequest request){

        String requestHeader = request.getHeader("Authorization");
        String token = requestHeader.substring(7);
        String username = this.jwtHelper.getUsernameFromToken(token);

        Customer customer = customerRepo.findByEmail(username);
        Cart cart = cartRepo.findCartByC(customer);

        Set<Cart_Product> p = cart.getP();
        List<Order_Items>orderItems = new ArrayList<>();

        for(Cart_Product cartProduct:p){
            Order_Items orderItems1 = new Order_Items();
            orderItems1.setQyt(cartProduct.getQuty());
            orderItems1.setSize(cartProduct.getSize());

                Product product = cartProduct.getProduct().stream().findFirst().orElseThrow();
                orderItems1.setColor(product.getColor());
                orderItems1.setDescription(product.getDescription());
                orderItems1.setpId(product.getpId());
                orderItems1.setName(product.getName());
                orderItems1.setGender(product.getGender());

                Images images = product.getImage().stream().findFirst().orElseThrow();
                orderItems1.setImage(images.getImgUrl());

                orderItems.add(orderItems1);
                orderItemsRepository.save(orderItems1);

        }
        Addr_details orderDetails = addrrDetailsRepo.findOrder_detailsByCustomer(customer);
        String addr = orderDetails.getAddr()+", "+orderDetails.getCity()+", "+orderDetails.getTown()+", "+orderDetails.getState()+", "+orderDetails.getPincode();

        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        Date date = new Date();

        Orders orders = new Orders();
        orders.setOrderItems(orderItems);
        orders.setAddr(addr);
        orders.setDate(date);
        orders.setPaymentType(payment.getPaymentType());
        orders.setTotalAmount(payment.getAmount());
        orders.setTotalItem(p.size());
        orders.setCustomer(customer);
        orders.setStatus("Paid");
        orderRepo.save(orders);
        //sendMail(orders, customer.getEmail(),customer.getName());

        return ResponseEntity.ok(orders);
    }

    public void sendMail(Orders orders,String email,String Name){
        String body = "Hey "+ Name+" Your order has been confirmed! Thanks For Shopping.Your order details are"+
                orders.getOrderItems()+" Date : "+orders.getDate()+"Thank You";
        mailService.sendEmail(email,"Your order has been confirmed!",body);
    }

    @GetMapping("/fetchOrders")
    public ResponseEntity<?> fetchOrders(HttpServletRequest request){

        String requestHeader = request.getHeader("Authorization");
        String token = requestHeader.substring(7);
        String username = this.jwtHelper.getUsernameFromToken(token);

        Customer customer = customerRepo.findByEmail(username);
        List<Orders>orders = orderRepo.findByCustomer(customer);

        return ResponseEntity.ok(orders);
    }
}
