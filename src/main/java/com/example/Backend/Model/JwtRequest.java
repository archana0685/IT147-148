package com.example.Backend.Model;

public class JwtRequest {

    private String password;
    private String email;

    public JwtRequest(String password, String email) {
        this.password = password;
        this.email = email;
    }

    public JwtRequest() {

    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
