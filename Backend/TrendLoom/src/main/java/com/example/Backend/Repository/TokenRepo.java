package com.example.Backend.Repository;

import com.example.Backend.Entity.Cart;
import com.example.Backend.Entity.Customer;
import com.example.Backend.Entity.ForgetPasswordToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TokenRepo extends JpaRepository<ForgetPasswordToken,Long> {

    @Query("select c from ForgetPasswordToken c where c.Token=?1")
    ForgetPasswordToken findForgetPasswordTokenByToken(@Param("token") String token);
}
