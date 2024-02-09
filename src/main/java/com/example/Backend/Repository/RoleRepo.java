package com.example.Backend.Repository;

import com.example.Backend.Entity.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Roles,Long> {


}
