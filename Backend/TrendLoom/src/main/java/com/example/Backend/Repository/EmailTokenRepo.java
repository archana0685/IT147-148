package com.example.Backend.Repository;

import com.example.Backend.Entity.Customer;
import com.example.Backend.Entity.EmailVerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailTokenRepo extends JpaRepository<EmailVerificationToken,Long> {

    @Query("SELECT c from EmailVerificationToken c where c.customer.email = ?1")
    EmailVerificationToken findByEmail(@Param("email") String email);
}
