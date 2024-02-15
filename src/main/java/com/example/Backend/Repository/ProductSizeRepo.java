package com.example.Backend.Repository;

import com.example.Backend.Entity.Product_Size;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductSizeRepo extends JpaRepository<Product_Size,Long> {
}
