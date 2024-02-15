package com.example.Backend.Controller;

import com.example.Backend.Entity.Images;
import com.example.Backend.Entity.Product;
import com.example.Backend.Entity.Product_Size;
import com.example.Backend.Repository.ImagesRepo;
import com.example.Backend.Repository.ProductRepo;
import com.example.Backend.Repository.ProductSizeRepo;
import com.example.Backend.ServiceImpl.ProductImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Set;

@RestController
@RequestMapping("/admin/product")
@CrossOrigin("*")
public class CrudProduct {

    @Autowired
    ProductImpl productImpl;

    @Autowired
    ProductRepo productRepo;

    @Autowired
    ImagesRepo imagesRepo;

    @Autowired
    ProductSizeRepo productSizeRepo;

    @PostMapping("/addProduct")
    @PreAuthorize("hasRole('ADMIN')")
    public String addProduct(@RequestBody Product product) {

        Set<Images> images = product.getImage();

        try {
            for (Images i : images)
                i.setProduct(product);
        }catch (Exception E){
            System.out.println(E);
        }
        
        Date date = new Date();
        product.setDate(date);
        productRepo.save(product);
        return "OK";
    }

    @PostMapping("/updateImage")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteImage(@RequestBody Images images) {

        Long id = images.getImgId();
        Images images1 =  imagesRepo.findById(id).orElseThrow();
        images1.setImgUrl(images.getImgUrl());
        images1.setImgView(images.getImgView());
        imagesRepo.save(images1);

        return ResponseEntity.ok("OK");
    }

    @PostMapping("/updateQyt")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateQyt(@RequestBody Product_Size productSize) {

        try{
            Long id = productSize.getPsId();
            Product_Size productSize1 = productSizeRepo.findById(id).orElseThrow();
            productSize1.setpSize(productSize.getpSize());
            productSize1.setPrice(productSize.getPrice());
            productSize1.setpStock(productSize.getpStock());
            productSizeRepo.save(productSize1);}
        catch (Exception E){
            System.out.println(E);
        }

        return ResponseEntity.ok("OK");
    }

    @GetMapping("/test")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> test(){
        return ResponseEntity.ok("ok");
    }
}
