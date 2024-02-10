package com.example.Backend.Repository;

import com.example.Backend.Entity.Cart_Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Cart_ProductRepo extends JpaRepository<Cart_Product,Long> {
}
