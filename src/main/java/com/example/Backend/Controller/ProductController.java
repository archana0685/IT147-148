package com.example.Backend.Controller;

import com.example.Backend.Entity.Images;
import com.example.Backend.Repository.ProductRepo;
import com.example.Backend.ServiceImpl.ProductImpl;
import com.example.Backend.Entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductImpl productImpl;

    @Autowired
    ProductRepo productRepo;

    @GetMapping("/getProduct")
    public List<Product> getProduct(){
//        System.out.println("Calllllllllllllllllllllll");
        List<Product> p = productRepo.findAllProductsWithPagination();
        return p;
    }

    @GetMapping("/getProduct/{id}")
    public Product getproductById(@PathVariable Long id)
    {
        return productImpl.getProductById(id);
    }
}
