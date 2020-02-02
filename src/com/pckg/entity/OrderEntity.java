package com.pckg.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "NEWDB.ORDER")
public class OrderEntity {
	
	@Id
	private String orderNumber;
	private String orderStatus;
	private String shippingAddress;
	private String orderDueDate;
	private String buyerName;
	private String buyerPhone;
	private String orderTotal;
	
	public String getOrderNumber() {
		return orderNumber;
	}
	
	public String getOrderStatus() {
		return orderStatus;
	}
	
	public String getShippingAddress() {
		return shippingAddress;
	}
	
	public String getOrderDueDate() {
		return orderDueDate;
	}
	
	public String getBuyerName() {
		return buyerName;
	}
	
	public String getBuyerPhone() {
		return buyerPhone;
	}
	
	public String getOrderTotal() {
		return orderTotal;
	}
	
	public void setOrderNumber(String ono) {
		this.orderNumber=ono;
	}
	
	public void setOrderStatus(String ostatus) {
		this.orderStatus=ostatus;
	}
	
	public void setShippingAddress(String sa) {
		this.shippingAddress=sa;
	}
	
	public void setOrderDueDate(String odd) {
		this.orderDueDate=odd;
	}
	
	public void setBuyerName(String bn) {
		this.buyerName=bn;
	}
	
	public void setBuyerPhone(String bp) {
		this.buyerPhone=bp;
	}
	
	public void setOrderTotal(String ot) {
		this.orderTotal=ot;
	}
	
	
}
