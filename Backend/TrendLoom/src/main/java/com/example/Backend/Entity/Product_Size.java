package com.example.Backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product_Size {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long psId;
    String pSize;
    int pStock;
    float price;

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Long getPsId() {
        return psId;
    }

    public void setPsId(Long psId) {
        this.psId = psId;
    }

    public String getpSize() {
        return pSize;
    }

    public void setpSize(String pSize) {
        this.pSize = pSize;
    }

    public int getpStock() {
        return pStock;
    }

    public void setpStock(int pStock) {
        this.pStock = pStock;
    }
}
