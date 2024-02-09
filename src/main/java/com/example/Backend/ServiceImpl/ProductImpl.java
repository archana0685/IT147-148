package com.example.Backend.ServiceImpl;

import com.example.Backend.Entity.Product;
import com.example.Backend.Repository.ProductRepo;
import com.example.Backend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductImpl implements ProductService {

    @Autowired
    ProductRepo productRepo;

    @Override
    public void saveProduct(Product product) {
        productRepo.save(product);
    }

    @Override
    public Product getProductById(long id)
    {
        return productRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + id));
    }
}
