package com.example.Backend.Entity;

import jakarta.persistence.*;

@Entity
public class Roles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String role;

    public Roles(String role) {
        this.role = role;
    }
    public Roles(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
