package com.example.Backend.Repository;

import com.example.Backend.Entity.Addr_details;
import com.example.Backend.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AddrrDetailsRepo extends JpaRepository<Addr_details,Long> {

    @Query("select addr from Addr_details  addr where addr.customer = ?1")
    public Addr_details findOrder_detailsByCustomer(@Param("customer") Customer customer);
}
