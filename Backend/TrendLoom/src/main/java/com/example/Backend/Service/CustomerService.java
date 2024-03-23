package com.example.Backend.Service;

import com.example.Backend.Entity.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CustomerService {

    Customer saveCustomer(Customer customer);
    void deleteCutomer(Long Id);
    Customer findByEmail(String email);
}
