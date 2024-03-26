package com.example.Backend.ServiceImpl;

import com.example.Backend.Entity.EmailVerificationToken;
import com.example.Backend.Repository.EmailTokenRepo;
import com.example.Backend.Service.EmailTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailTokenServiceImpl implements EmailTokenService {

    @Autowired
    EmailTokenRepo emailTokenRepo;

    @Override
    public EmailVerificationToken findByEmail(String email) {
        return emailTokenRepo.findByEmail(email);
    }

    @Override
    public void addEmailToken(EmailVerificationToken verificationToken) {
        emailTokenRepo.save(verificationToken);
    }

    @Override
    public void deleteToken(EmailVerificationToken verificationToken) {
        emailTokenRepo.delete(verificationToken);
    }
}
