package com.example.Backend.Repository;

import com.example.Backend.Entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<Orders,Long> {

}
