package com.example.Backend.ServiceImpl;

import com.example.Backend.Entity.Customer;
import com.example.Backend.Repository.CustomerRepo;
import com.example.Backend.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerImpl implements CustomerService {

    @Autowired
    CustomerRepo customerRepo;

    @Override
    public Customer saveCustomer(Customer customer) {
        customerRepo.save(customer);
        return customer;
    }

    @Override
    public void deleteCutomer(Long Id) {

    }

    @Override
    public Customer findByEmail(String email) {
        Customer c = customerRepo.findByEmail(email);
        return c;
    }
}
