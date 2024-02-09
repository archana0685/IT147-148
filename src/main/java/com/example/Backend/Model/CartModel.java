package com.example.Backend.Model;

public class CartModel {

    Long pid;
    String size;

    int quty;

    public int getQuty() {
        return quty;
    }

    public void setQuty(int quty) {
        this.quty = quty;
    }

    public Long getPid() {
        return pid;
    }

    public void setPid(Long pid) {
        this.pid = pid;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
