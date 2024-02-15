package com.example.Backend.Controller;

import com.example.Backend.Entity.Images;
import com.example.Backend.Entity.Product;
<<<<<<< HEAD
import com.example.Backend.Entity.Product_Size;
=======
>>>>>>> 0f44473bb40bebdba0389f58af2c5f357d5b6d42
import com.example.Backend.Repository.ImagesRepo;
import com.example.Backend.Repository.ProductRepo;
import com.example.Backend.Repository.ProductSizeRepo;
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

<<<<<<< HEAD
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
=======
    @PostMapping("/addProduct")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {

        Set<Images> images = product.getImage();

//        for(Images i : images)
//            i.setProduct(product);
>>>>>>> 0f44473bb40bebdba0389f58af2c5f357d5b6d42

        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        Date date = new Date();
        product.setDate(date);
        productRepo.save(product);
<<<<<<< HEAD
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
=======
        return new ResponseEntity<>(product, HttpStatus.CREATED);
>>>>>>> 0f44473bb40bebdba0389f58af2c5f357d5b6d42
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