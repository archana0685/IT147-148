package com.example.Backend.Entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    float totalAmount;
    String status;
    int totalItem;
    Date date;
    String paymentType;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Customer customer;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<Order_Items>orderItems;

    String addr;

    public List<Order_Items> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<Order_Items> orderItems) {
        this.orderItems = orderItems;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public float getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(float totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getTotalItem() {
        return totalItem;
    }

    public void setTotalItem(int totalItem) {
        this.totalItem = totalItem;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
