<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Logged In</title>
<style>
body {
  background-image: url('https://image.freepik.com/free-vector/welcome-illustrated-concept-landing-page_52683-24618.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center; 
}

h3 {
//text-align: center;
}

.style1 {
padding: 100px 0;
text-align: center;
top:80px;"
}
</style>

</head>

<body>
<div class="style1">
<h2>Welcome ${name}.</h2>
<h3>You are a ${status}, Click <a href=${nextpage}>here</a> to go to Next page.</h3>

</div>
</body>
</html>