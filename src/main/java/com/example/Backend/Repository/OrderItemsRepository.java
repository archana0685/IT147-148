package com.example.Backend.Repository;

import com.example.Backend.Entity.Order_Items;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemsRepository extends JpaRepository<Order_Items,Long> {


}
