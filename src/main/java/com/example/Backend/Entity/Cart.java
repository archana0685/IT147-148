package com.example.Backend.Entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    List<Cart_Product>p;

    @OneToOne
    Customer c;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Cart_Product> getP() {
        return p;
    }

    public void setP(List<Cart_Product> p) {
        this.p = p;
    }

    public Customer getC() {
        return c;
    }

    public void setC(Customer c) {
        this.c = c;
    }
}
