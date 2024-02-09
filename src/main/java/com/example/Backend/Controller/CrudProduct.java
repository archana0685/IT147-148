package com.example.Backend.Controller;

import com.example.Backend.Entity.Product;
import com.example.Backend.Repository.ProductRepo;
import com.example.Backend.ServiceImpl.ProductImpl;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("/admin/product")
@CrossOrigin("*")
public class CrudProduct {

    @Autowired
    ProductImpl productImpl;

    @Autowired
    ProductRepo productRepo;

    @PostMapping("/addProduct")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        Date date = new Date();
        product.setDate(date);
        productImpl.saveProduct(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @GetMapping("/test")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> test(){
        return ResponseEntity.ok("ok");
    }
}