package com.example.Backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Order_Items {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String size;
    int qyt;
    Long pId;
    String color;
    String gender;
    String description;
    String name;
    String image;

}
