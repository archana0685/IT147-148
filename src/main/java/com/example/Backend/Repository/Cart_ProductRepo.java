package com.example.Backend.Repository;

import com.example.Backend.Entity.Cart_Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface Cart_ProductRepo extends JpaRepository<Cart_Product,Long> {

    @Query("delete from Cart_Product ")
    public boolean deleteCart_ProductById();
}
