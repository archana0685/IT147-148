package com.example.Backend.Repository;

import com.example.Backend.Entity.Cart_Product;
import com.example.Backend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;
import java.util.Set;

public interface  Cart_ProductRepo extends JpaRepository<Cart_Product,Long> {

    @Query("select cp from Cart_Product cp")
    List<Cart_Product> findCart_ProductByProduct();
}
