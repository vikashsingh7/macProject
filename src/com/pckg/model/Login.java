/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pckg.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class Login {
	@NotNull(message = "Please enter your userid")
	@Size(min=4,max=15 , message = "User Id must be between 4 and 15 characters")
    private String userName;
	
	@NotNull(message = "Please enter your password.")
	@Size(min=8,max=15 , message = "Password must be between 8 and 15 characters")
    
	private String password;   

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return the userName
     */
    public String getUserName() {
        return userName;
    }

    /**
     * @param userName the userName to set
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }
}
