package com.example.Backend.Service;

import com.example.Backend.Entity.EmailVerificationToken;
import com.example.Backend.Repository.EmailTokenRepo;

public interface EmailTokenService {

    EmailVerificationToken findByEmail(String email);

    void addEmailToken(EmailVerificationToken verificationToken);

    void deleteToken(EmailVerificationToken verificationToken);

}
