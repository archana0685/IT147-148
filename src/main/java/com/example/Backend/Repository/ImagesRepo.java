package com.example.Backend.Repository;

import com.example.Backend.Entity.Images;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImagesRepo extends JpaRepository<Images,Long> {
}
