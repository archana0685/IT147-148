package com.example.Backend.Repository;

import com.example.Backend.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepo extends JpaRepository<Customer,Long>   {
    @Query("SELECT c from Customer c where c.email = ?1")
    public Customer findByEmail(@Param("email") String email);

}
