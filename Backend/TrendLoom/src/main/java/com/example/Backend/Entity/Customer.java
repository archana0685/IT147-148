package com.example.Backend.Entity;

import jakarta.persistence.*;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.management.relation.Role;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Entity
public class Customer{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long cid;
    String name;
    String email;
    String password;
    String auth_type;

    @ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    List<Roles>roles = new ArrayList<>();

    public Long getCid() {
        return cid;
    }

    public List<Roles> getRoles() {
        return roles;
    }

    public void setRoles(List<Roles> list) {
        this.roles = list;
    }

    public String getAuth_type() {
        return auth_type;
    }

    public void setAuth_type(String auth_type) {
        this.auth_type = auth_type;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setCid(Long id) {
        this.cid = id;
    }

    public Long getId() {
        return cid;
    }

    public void addRole(Roles role){
        this.roles.add(role);
    }
}