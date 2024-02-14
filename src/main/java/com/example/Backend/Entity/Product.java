package com.example.Backend.Entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
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

    @OneToMany(mappedBy = "product",cascade = {CascadeType.ALL},orphanRemoval = true,fetch = FetchType.EAGER)
    Set<Images> image;

    @OneToMany(cascade = {CascadeType.ALL},orphanRemoval = true,fetch = FetchType.EAGER)
    List<Product_Size>product_sizes;

    public String getCategory() {
        return Category;
    }

    public void setCategory(String category) {
        Category = category;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Set<Images> getImage() {
        return image;
    }

    public void setImage(Set<Images> images) {
        this.image = images;
    }

    public List<Product_Size> getProduct_sizes() {
        return product_sizes;
    }

    public void setProduct_sizes(List<Product_Size> product_sizes) {
        this.product_sizes = product_sizes;
    }

    public Long getpId() {
        return pId;
    }

    public void setpId(Long pId) {
        this.pId = pId;
    }

    public String getColor() {
        return Color;
    }

    public void setColor(String color) {
        Color = color;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }


}
