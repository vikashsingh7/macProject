package com.pckg.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.pckg.entity.OrderEntity;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, String>{
	
	

}
