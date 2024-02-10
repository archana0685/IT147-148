package com.example.Backend.Service;

import com.example.Backend.Entity.Product;
import org.springframework.stereotype.Component;

@Component
public interface ProductService {

    public void saveProduct(Product product);

    public Product getProductById(long id);
}
