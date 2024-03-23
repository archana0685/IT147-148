package com.example.Backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Addr_details {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String name;
    String mobile_no;
    String pincode;
    String addr;
    String town;
    String city;
    String state;


    @OneToOne(fetch = FetchType.EAGER ,cascade = CascadeType.ALL)
    Customer customer;

}
