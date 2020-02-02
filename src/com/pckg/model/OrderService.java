package com.pckg.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pckg.entity.OrderEntity;
import com.pckg.repository.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	OrderRepository orderRepository;
	
	public List<OrderEntity> findAll() {
		return orderRepository.findAll();
	}
	
	public void insertOrder(String itemnumber) {


		OrderEntity orderEntity = new OrderEntity();
		orderEntity.setOrderNumber("1003");
		orderEntity.setBuyerName(itemnumber);
		orderEntity.setBuyerPhone("TEXT");
		orderEntity.setOrderDueDate("DATE");
		orderEntity.setOrderStatus("TEXT");
		orderEntity.setOrderTotal("500000");
		orderRepository.saveAndFlush(orderEntity);		
		
	}
	

}
