package com.example.Backend.Controller;

import com.example.Backend.Entity.Images;
import com.example.Backend.Entity.Product;
import com.example.Backend.Repository.ImagesRepo;
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

    @PostMapping("/addProduct")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {

        Set<Images> images = product.getImage();

//        for(Images i : images)
//            i.setProduct(product);

        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        Date date = new Date();
        product.setDate(date);
        productRepo.save(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @PutMapping("/deleteImage/{id}/{pid}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteImage(@PathVariable("id")Long id,@PathVariable("pid")Long pid) {

            Product product = productRepo.findById(pid).orElseThrow();
            Images images =  imagesRepo.findById(id).orElseThrow();
            boolean check = product.getImage().remove(images);
            System.out.println(check);

            imagesRepo.deleteById(id);
            return ResponseEntity.ok("OK");
    }


    @GetMapping("/test")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> test(){
        return ResponseEntity.ok("ok");
    }
}