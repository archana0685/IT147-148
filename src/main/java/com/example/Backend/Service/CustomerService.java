package com.example.Backend.Service;

import com.example.Backend.Entity.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface CustomerService {

    public Customer saveCustomer(Customer customer);
    public void deleteCutomer(Long Id);
    public Customer findByEmail(String email);
}
