
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Order Management System</title>

	<link rel="stylesheet" href="<c:url value='/resources/css/newstyle.css'/>"
	type="text/css" media="all">
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" 
	rel="stylesheet" type="text/css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="<c:url value='/resources/css/custom.css'/>"
	type="text/css" media="all">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

 
	
		<div style="margin: 0 auto; width:655px;">
			<br> <br> <br>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="capital">Login</h4>
				</div>
				<div class="panel-body">
					<h3 class="red" id="msg2"></h3>
				
					<form:form method="POST" action="loginSuccess">

						
							<div class="form-group">
								<form:label path="userName"
									class="control-label col-sm-offset-1 col-sm-3 text-right fontstyle">User Id<span
										class="red">*</span>
								</form:label>
								<div class="col-sm-7">
									<form:input path="userName" class="form-control" required="true" title="User id must contain 4 to 15 characters"
									 pattern=".{4,15}" />
									<br>
									<form:errors path="userName" />
								</div>
								<br>
							</div>
							<div class="form-group">
								<form:label path="password"
									class="control-label col-sm-offset-1 col-sm-3 text-right fontstyle">Password<span
										class="red">*</span>
								</form:label>
								<div class="col-sm-7">
									<form:input type="password" path="password" required="true" title="Password must contain 8 to 15 characters"
										class="form-control" pattern=".{8,15}"/>
											<a href="forgotPassword" class="help-text pull-right">Forgot Password?</a>
									<br>
									<form:errors path="password" />
								</div>
								<br>
							</div>
							<br><br><br><br>
							<div class="form-group">
								<div class="col-sm-offset-4 col-sm-7">
									<a href="register">New User?</a> &nbsp; <button
										type="submit" class="btn btn-primary fontfamily" >Login</button>
								</div>

							</div>
							
							
					</form:form>
					
					<div class="col-md-12 text-center">
            <div class="text-center text-danger">${value}</div>  
            </div>
					
					</div>
					
				</div>
			</div>
	</div>
</body>


</html>
