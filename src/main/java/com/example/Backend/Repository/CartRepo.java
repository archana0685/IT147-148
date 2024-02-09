package com.example.Backend.Repository;

import com.example.Backend.Entity.Cart;
import com.example.Backend.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {

    @Query("select cart from Cart cart where cart.c = ?1")
     Cart findCartByC(@Param("c")Customer c);
}
