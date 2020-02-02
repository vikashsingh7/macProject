
package com.pckg.newPackage;

import java.util.Enumeration;
import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.pckg.entity.UserEntity;
import com.pckg.model.ItemService;
import com.pckg.model.Login;
import com.pckg.model.LoginService;
import com.pckg.model.OrderService;
import com.pckg.model.User;
import com.pckg.repository.ItemRepository;
import com.pckg.repository.UserRepository;

@Controller
@SessionAttributes({"userName","userId"})
public class LoginController {
	@Autowired
	private LoginService loginService;

	@Autowired
	private Environment environment;
	
	@Autowired
	private ItemService itemservice;
	
	@Autowired
	private OrderService orderservice;
	

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView getLoginDetails() {
		return new ModelAndView("login", "command", new Login());
	}

	@RequestMapping(value = "/authenticateLogin", method = RequestMethod.POST)
	public String authenticateLogin(@Valid @ModelAttribute("command") Login userLogin, BindingResult result,
			ModelMap model) {		

		ModelAndView modelAndView = new ModelAndView("error");
		try {
			if (result.hasErrors()) {
				modelAndView= new ModelAndView("login", "command", userLogin);
			}
			else{
				User user= loginService.authenticateLogin(userLogin);
				
				model.addAttribute("userName", user.getName());
				model.addAttribute("userId", user.getUserId());
				
				//...............................................................................
				
				if(user!=null) {
					return "loginSuccess";
				}
				
				//...............................................................................
				
			}
		}
		catch (Exception e) {
			
			if (e.getMessage().contains("LoginService")) {
				modelAndView = new ModelAndView("login"); 
				modelAndView.addObject("loginName", userLogin.getUserName());
			}

			modelAndView.addObject("message", environment.getProperty(e.getMessage()));
		}
		return "loginSuccess";

	}
	@RequestMapping(value = "/logout")
	public ModelAndView logout(HttpSession session) {
		
		ModelAndView model = new ModelAndView("infyGoHome", "", "");

		Enumeration<String> attributes = session.getAttributeNames();

		while (attributes.hasMoreElements())
			session.removeAttribute(attributes.nextElement());
		
		model.addObject("logoutMessage", environment.getProperty("LoginController.LOGOUT_SUCCESS"));
		return model;
	}
	
	 @RequestMapping(value = "/redirect", method = RequestMethod.POST)
	   public String redirect(@RequestParam("userid") String userid,@RequestParam("pwd") String userpwd, ModelMap model) {
		 String errorMsg="";
		 
		 User user= loginService.newLogin(userid);
		 String temp=user.getPassword();
		 temp=temp.trim();
		 if(!temp.equals(userpwd)){
			 errorMsg="UserName or Password Incorrect";
			 model.addAttribute("errorMessage",errorMsg);
			 return "homepage";
		 }
		 String status=user.getStatus();
		 if(status.equals("USER")) {
			 model.addAttribute("nextpage","orders");
		 }
		 else if(status.equals("ADMIN")) {
			 model.addAttribute("nextpage","admin");
		 }
		 
		 model.addAttribute("name",user.getName());
		 model.addAttribute("status",status);
	     return "NewFile";
	   }
	   @RequestMapping(value = "/homepage", method = RequestMethod.GET)
	   public String finalPage() {
	      return "homepage";
	   }
	   
	   @RequestMapping(value = "/NewFile", method = RequestMethod.POST)
	   public String afterLoginPage() {
		   
		   
		   return "NewFile";
	   }
	   
	   @RequestMapping(value="/orders", method= RequestMethod.GET)
	   public String ordersPage(ModelMap modelMap) {
		   
		   //modelMap.put("orders",loginService.findAll());
		   modelMap.put("orders",itemservice.findAll());
		   
		   return "orders";
	   }
	   
	   @RequestMapping(value="/admin", method= RequestMethod.GET)
	   public String adminPage(ModelMap model) {
		   
		   model.put("admin",orderservice.findAll());
		   
		   return "admin";
	   }
	   
	   @RequestMapping(value="/placeOrder", method=RequestMethod.GET)
	   public String placeNewOrder(@RequestParam("itemnumber") String itemnumber,@RequestParam("itemname") String itemname) {
		   orderservice.insertOrder(itemnumber);
		   return "orders";
	   }
	   
	   @RequestMapping(value="/PlacedOrders", method= RequestMethod.GET)
	   public String PlacedOrdersPage(ModelMap modelMap) {
		   
		   
		   modelMap.put("placedorders",itemservice.findAll());
		   
		   return "orders";
	   }
	   
}
