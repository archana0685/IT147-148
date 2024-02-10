package com.example.Backend.Controller;

// imports

import com.example.Backend.Entity.Cart;
import com.example.Backend.Entity.Cart_Product;
import com.example.Backend.Entity.Customer;
import com.example.Backend.Entity.Product;
import com.example.Backend.Model.CartModel;
import com.example.Backend.Repository.CartRepo;
import com.example.Backend.Repository.Cart_ProductRepo;
import com.example.Backend.Repository.CustomerRepo;
import com.example.Backend.Repository.ProductRepo;
import com.example.Backend.Security.JwtHelper;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin("*")
public class CartController {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ProductRepo productRepo;

    @Autowired
    CartRepo cartRepo;

    @Autowired
    JwtHelper jwtHelper;

    @Autowired
    Cart_ProductRepo cartProductRepo;

    @PostMapping("/addToCart")
    public ResponseEntity<?> addToCart(@RequestBody CartModel cartModel, HttpServletRequest request){

        String requestHeader = request.getHeader("Authorization");
        String token = requestHeader.substring(7);
        String username = this.jwtHelper.getUsernameFromToken(token);

        Customer c = customerRepo.findByEmail(username);
        Product product = productRepo.findById(cartModel.getPid()).orElseThrow();
        String size = cartModel.getSize();
        int quty = cartModel.getQuty();

        List<Product> p = new ArrayList<>();
        p.add(product);
        Cart_Product cartProduct = new Cart_Product();
        cartProduct.setProduct(p);
        cartProduct.setSize(size);
        cartProduct.setQuty(quty);

        List<Cart_Product>l = new ArrayList<>();

        Cart  cart = cartRepo.findCartByC(c);
        if(cart==null){
            System.out.println("Cart Null");
            cart = new Cart();
            cart.setC(c);
            l.add(cartProduct);
            cart.setP(l);
        }else{
            System.out.println("Object Exists");
            l = cart.getP();
            l.add(cartProduct);
            cart.setP(l);
        }
        cartRepo.save(cart);
        return ResponseEntity.ok(cartProduct);
    }

    @GetMapping("/viewCart")
    public ResponseEntity<?> viewCart(HttpServletRequest request){
        String requestHeader = request.getHeader("Authorization");

        System.out.println(requestHeader);
        String token = requestHeader.substring(7);
        String username = this.jwtHelper.getUsernameFromToken(token);
        System.out.println("view Cart");
        Customer c = customerRepo.findByEmail(username);
        Cart cart = cartRepo.findCartByC(c);
        List<Cart_Product>cartProduct = cart.getP();

        return ResponseEntity.ok(cartProduct);
    }

    @PutMapping("/clearCart/{id}")
    public ResponseEntity<?>clearCart(@PathVariable("id")Long id){
        Cart cart = cartRepo.findById(id).orElseThrow();
        cart.setP(null);
        cartRepo.save(cart);
        return ResponseEntity.ok(cart);
    }

    @PutMapping("/deleteCartProduct/{productId}")
    public ResponseEntity<?>deleteCartProduct(@PathVariable("productId")Long pid){
        cartProductRepo.deleteById(pid);
        return ResponseEntity.ok("OK");
    }

    @PutMapping("/incQyt/{productId}")
    public ResponseEntity<?>incProductQyt(@PathVariable("productId")Long pid){
        Cart_Product cartProduct = cartProductRepo.findById(pid).orElseThrow();
        int qyt  = cartProduct.getQuty();
        cartProduct.setQuty(qyt++);
        cartProductRepo.save(cartProduct);
        return ResponseEntity.ok("OK");
    }

    @PutMapping("/decQyt/{productId}")
    public ResponseEntity<?>decProductQyt(@PathVariable("productId")Long pid){
        Cart_Product cartProduct = cartProductRepo.findById(pid).orElseThrow();
        int qyt  = cartProduct.getQuty();
        cartProduct.setQuty(qyt--);
        cartProductRepo.save(cartProduct);
        return ResponseEntity.ok("OK");
    }
    @GetMapping("/test")
    public ResponseEntity<?> test(){
        return ResponseEntity.ok("ok");
    }

}
