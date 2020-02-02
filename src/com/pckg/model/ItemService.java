package com.pckg.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pckg.entity.ItemEntity;
import com.pckg.repository.ItemRepository;

@Service
public class ItemService {
	
	@Autowired
	ItemRepository itemRepository;

	public List<ItemEntity> findAll() {
		return itemRepository.findAll();
	}
}
