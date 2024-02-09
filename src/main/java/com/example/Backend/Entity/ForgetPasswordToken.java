package com.example.Backend.Entity;

import jakarta.persistence.*;

@Entity
public class ForgetPasswordToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String Token;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    Customer customer;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return Token;
    }

    public void setToken(String token) {
        Token = token;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
