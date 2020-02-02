package com.pckg.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "ITEM")
public class ItemEntity {

	@Id
	private String itemNumber;
	private String itemName;
	private String itemPrice;
	
	public String getItemNumber() {
		return itemNumber;
	}
	
	public String getItemName() {
		return itemName;
	}
	
	public String getItemPrice() {
		return itemPrice;
	}
	
	public void setItemNumber(String ino) {
		this.itemNumber=ino;
	}
	
	public void setItemName(String iname) {
		this.itemName=iname;
	}
	
	public void setItemPrice(String iprice) {
		this.itemPrice=iprice;
	}
	
	
}
