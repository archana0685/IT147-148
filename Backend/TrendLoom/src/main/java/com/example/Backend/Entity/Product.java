package com.example.Backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long pId;
    String Color;
    String Gender;
    String Description;
    String Name;
    Date date;


    String Category;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    List<Images>image;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    List<Product_Size>product_sizes;

}
