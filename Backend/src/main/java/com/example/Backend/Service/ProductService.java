package com.example.Backend.Service;

import com.example.Backend.Entity.Product;

public interface ProductService {

    public void saveProduct(Product product);

    public Product getProductById(long id);
}
