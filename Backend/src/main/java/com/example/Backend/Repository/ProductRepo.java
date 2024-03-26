package com.example.Backend.Repository;

import com.example.Backend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepo extends JpaRepository<Product,Long> {
    @Query("select p from Product p order by p.date")
    public List<Product>findAllProductsWithPagination();
}
