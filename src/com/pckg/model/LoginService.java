package com.pckg.model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pckg.entity.UserEntity;
import com.pckg.repository.ItemRepository;
import com.pckg.repository.UserRepository;



@Service
public class LoginService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ItemRepository itemRepository;
	
	
	public User authenticateLogin(Login userLogin) throws Exception{
		UserEntity userentity = userRepository.findOne(userLogin.getUserName());
		User user=new User();
		user.setAddress(userentity.getAddress());
		user.setEmail(userentity.getEmail());
		user.setName(userentity.getName());
		user.setPassword(userentity.getPassword());
		user.setPhone(userentity.getPhone());
		user.setUserId(userentity.getUserId());
		
		
		if(!(user.getPassword().equals(userLogin.getPassword()))){
			throw new Exception("LoginService.INVALID_CREDENTIALS");
		}
			return user;				
		}
	
	public User newLogin(String id) {
		UserEntity userentity = userRepository.findOne(id);
		User user=new User();
		user.setAddress(userentity.getAddress());
		user.setEmail(userentity.getEmail());
		user.setName(userentity.getName());
		user.setPassword(userentity.getPassword());
		user.setPhone(userentity.getPhone());
		user.setUserId(userentity.getUserId());
		user.setStatus(userentity.getStatus());
		
		return user;
		
	}
	
	}
