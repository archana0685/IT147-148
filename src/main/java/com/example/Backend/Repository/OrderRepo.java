package com.example.Backend.Repository;

import com.example.Backend.Entity.Customer;
import com.example.Backend.Entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepo extends JpaRepository<Orders,Long> {

    @Query("select o from Orders o where o.customer = ?1")
    List<Orders> findByCustomer(@Param("c") Customer c);

}
