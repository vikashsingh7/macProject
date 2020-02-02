package com.pckg.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pckg.entity.UserEntity;
import com.pckg.model.User;
import com.pckg.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	public User getUserDetails(String userId){
		UserEntity ue = userRepository.findOne(userId);
		if (ue == null){			
			System.out.println("USER NOT FOUND !!!!");
			
		}
		User user = new User();
		user.setAddress(ue.getAddress());
		user.setEmail(ue.getEmail());
		user.setName(ue.getName());
		user.setPhone(ue.getPhone());
		user.setUserId(ue.getUserId());
		
			return user;				
		}
}
