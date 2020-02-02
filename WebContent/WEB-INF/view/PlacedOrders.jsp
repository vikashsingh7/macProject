<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>




<div>
<table class="w3-table-all w3-card-4" style="width:70%" align="center">
<tr class="w3-green">
<th>Item Number</th>
<th>Item Name</th>
<th>Price</th>
</tr>
<c:forEach var="item" items="${orders}">
			<tr>
				<td>${item.itemNumber}</td>
				<td>${item.itemName}</td>
				<td>${item.itemPrice}</td>
				
			</tr>
		</c:forEach>
</table>
</div>



</body>
</html>