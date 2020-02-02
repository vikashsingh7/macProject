package com.pckg.newPackage;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.pckg.model.Login;

@Controller
@SessionAttributes("contextPath")
public class HomeController {
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView getHomeDetails(HttpSession session, HttpServletRequest request) {
		session.setAttribute("contextPath", request.getContextPath());
		
		return new ModelAndView("homepage","", "");
	}
}
