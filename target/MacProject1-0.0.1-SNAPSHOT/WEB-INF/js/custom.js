var $login = $('#login');
var $signup=$('#signup');
var $searchFlights=$('#searchFlights');
var $bookFlight=$('#bookFlight');
var $paymentForm=$('#paymentForm');
var $contactForm=$('#contactForm');

$signup.on('submit',function (event) {
	event.preventDefault();
	var datatoserver={};
	//bootbox.alert("new1"); 
	//bootbox.alert("inside signup function");
	var userid = $("#user").val();
	var password = $("#pwd").val();
	var name = $("#name").val();
	var city = $("#city").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	
	datatoserver = {
		'userId' : userid,
		'password' : password,
		'name' : name,
		'city' : city,
		'email' : email,
		'phone' : phone
	};
	console.log(datatoserver);
	$.ajax({
		url: "http://localhost:8181/register",
		type:'POST',
		data:JSON.stringify(datatoserver),
		contentType:"application/json",
		headers:{contentType:"application/x-www-form-urlencoded;charset=UTF-8"},
		success : function(response, status, xhr) {
			if (response)
				location.href = "Login.html";
			else
				$("#msg").html(response);
		},
		error : function(xhr, status) {
			{
				//bootbox.alert(status);
				//bootbox.alert("e1");
				//bootbox.alert($("#msg"));
				$("#msg").html(xhr.responseJSON.message);
			}
		}
	});
});
$login.on('submit',function (event) {
	console.log("inside login function");
	event.preventDefault();
	var datatoserver={};
	//bootbox.alert("in login");
	localStorage.userName=$("#user").val();
	datatoserver['userName']=$("#user").val();
	datatoserver['password']=$("#pwd").val();
	$.ajax({
		        url: "http://localhost:8181/login",
				type:'POST',
				data:JSON.stringify(datatoserver),
				headers:{contentType:"application/x-www-form-urlencoded;charset=UTF-8"},
				contentType:"application/json"
				//Access-Control-Allow-Origin:'*'
		    }).then(function(data) {
		      //bootbox.alert(data);
				location.href="SearchFlights.html";
		    },function(xhr) {
				console.log(xhr.responseJSON.message);
			      $("#msg2").html(xhr.responseJSON.message);
			    }); 	
});

$searchFlights.on('submit',function (event){
	event.preventDefault();
	//bootbox.alert("inside search function");
	var origin = $("#origin").val();
	var destination = $("#destination").val();
	var jdate = $("#jdate").val();
	localStorage.origin = origin;
	localStorage.destination = destination;
	localStorage.jdate = jdate;	
	
	var url1="http://localhost:8181/flights/"+origin+"/"+destination+"/"+jdate;
	$.ajax({
				
				url:url1,
				method : 'GET',
				success : function(response, status, xhr) {
					//bootbox.alert("success1")
					if (response.length == 0)
					{
						//bootbox.alert("in if");
						$("#results").html("<span class='flightError'>No flights available</span>");
						return;
					}
						
					var table = "<table class='table table-striped'>" + "<tr>"
							+ "<th>Flight Id</th>" + "<th>Origin</th>"
							+ "<th>Destination</th>" + "<th>Journey Date</th>"
							+ "<th>Departure Time</th>"
							+ "<th>Available Seats</th>" + "<th>Book</th></tr>";
					for (i = 0; i < response.length; i++) {
						var currentdate=new Date();
						
						response[i].time=currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
						
						var row = "<tr>" + "<td>"
								+ response[i].flightId
								+ "</td>"
								+ "<td>"
								+ response[i].source
								+ "</td>"
								+ "<td>"
								+ response[i].destination
								+ "</td>"
								+ "<td>"
								+ response[i].flightAvailableDate
								+ "</td>"
								+ "<td>"
								+ response[i].time
								+ "</td>"
								+ "<td>"
								+ response[i].seatCount
								+ "</td>"
								+'<td><button class="book btn btn-link" onclick="book(\''+response[i].flightId+'\',\''+response[i].time+'\',\''+response[i].fare+'\',\''+response[i].seatCount+'\')">Book</button></td></tr>';
						table += row; 
					}
					table += "</table" > $("#results").html(table);
					
				},
				error : function(xhr) {
					console.log(xhr.responseJSON.message);
					      $("#results").html(xhr.responseJSON.message);
				}
			});
});

function book(id,time,fare,availableseats) {
	localStorage.flightid = id;
	localStorage.time = time;
	localStorage.seats = availableseats;
	localStorage.basefare = fare;
	location.href = "BookFlight.html";
}

function bookdetails() {
	$("#jdate").html(localStorage.jdate);
	$("#time").html(localStorage.time);
	$("#origin").html(localStorage.origin);
	$("#destination").html(localStorage.destination);
	$("#fare").html(localStorage.basefare);
	$("#seats").html(localStorage.seats);
}

$bookFlight.on('submit',function (event) {
	console.log("inside bookflight submit method");
	event.preventDefault();
	
	localStorage.passenger1=$("#name1").val();
	localStorage.passenger2=$("#name2").val();
	localStorage.passenger3=$("#name3").val();
	localStorage.gender1=$("#gender1").val();
	localStorage.gender2=$("#gender2").val();
	localStorage.gender3=$("#gender3").val();
	localStorage.age1=$("#age1").val();
	localStorage.age2=$("#age2").val();
	localStorage.age3=$("#age3").val();
	//bootbox.alert("in login");
	p1 = $("#name1").val();
	p2 = $("#name2").val();
	p3 = $("#name3").val();
	//bootbox.alert(p1);
	//bootbox.alert(p2.length);
	//bootbox.alert(p3.length);
//bootbox.alert(0);
	if((p2.length==0) && (p3.length == 0))
	{
		flag=1;
		localStorage.totalfare = localStorage.basefare;
		localStorage.noofpassengers = 1;
		//bootbox.alert("inside if");
		location.href = "Payment.html";
	} 	
	else if((p2.length>0) && (p3.length == 0))
	{
		flag=1;
		localStorage.totalfare = localStorage.basefare*2;
		localStorage.noofpassengers = 2;
		//bootbox.alert("inside pass 2");
		location.href = "Payment.html";
	} 
	else if((p2.length>0) && (p3.length > 0))
	{
		flag=1;
		localStorage.totalfare = localStorage.basefare*3;
		localStorage.noofpassengers = 3;
		//bootbox.alert("inside pass3");
		location.href = "Payment.html";
	} 
	else if((p2.length==0) && (p3.length)>0)
	{
		bootbox.alert("Cannot enter Passenger3 without entering Passenger2");
	}
	
})

function onloadPayment() {
	$("#jdate").html(localStorage.jdate);
	$("#time").html(localStorage.time);
	$("#origin").html(localStorage.origin);
	$("#destination").html(localStorage.destination);
	$("#noofpassengers").html(localStorage.noofpassengers);
	$("#fare").html(localStorage.basefare);
	$("#totalfare").html(localStorage.totalfare);

}

$paymentForm.on('submit',function (event) {
	// to be updated
	event.preventDefault();
	//bootbox.alert("inside make payment")
	 //bootbox.alert(22)
	var cardnum = $("#cardnum").val();
	var cardholdername = $("#cardholdername").val();
	var cvv = $("#cvv").val();
	var pin = $("#pin").val(); 
	var expmnth = $("#expmnth").val();
	var expyr = $("#expyr").val();
	var totalbill =localStorage.totalfare;
	 //bootbox.alert(233)
	 //bootbox.alert(cardnum);
	 //bootbox.alert(244)
	/* console.log(cardholdername);
	 console.log(cvv);
	 console.log(pin);
	 console.log(expmnth);
	 console.log(expyr);
	 console.log(totalbill);*/
	 
	var datatoserver = {
		'cardNumber' : cardnum,
		'cardHolderName' : cardholdername,
		'cvv':cvv,
		'apin':pin,
		'expiryMonth':expmnth,
		'expiryYear':expyr,
	 	'totalBill':totalbill
	};
	var datatobookflight={
			'passenger1':localStorage.passenger1,
			'passenger2':localStorage.passenger2,
			'passenger3':localStorage.passenger3,
			'gender1':localStorage.gender1,
			'gender2':localStorage.gender2,
			'gender3':localStorage.gender3,
			'age1':localStorage.age1,
			'age2':localStorage.age2,
			'age3':localStorage.age3,
			'totalFare':localStorage.totalfare,
			'fare':localStorage.basefare,
			'departureDate':localStorage.jdate,
			'departureTime':localStorage.time,
			'flightId':localStorage.flightid,
			'seats':localStorage.seats
	}
	
	$.ajax({
		url : "http://localhost:8181/payment",
		type : 'POST',
		data : JSON.stringify(datatoserver),
		contentType:"application/json",
		success : function(response, status, xhr) {
			//bootbox.alert("her")
			console.log("inside payment ajax success call");
			console.log(response);
			$.ajax({
				url: "http://localhost:8181/bookflight",
				type:'POST',
				data:JSON.stringify(datatobookflight),
				contentType:"application/json",
				//headers:{contentType:"application/x-www-form-urlencoded;charset=UTF-8"},
				success : function(response, status, xhr) {
					//bootbox.alert("success");
				},
				error : function(xhr, status) {
					
						//bootbox.alert(status);
						//bootbox.alert("e1");
						//bootbox.alert($("#msg"));
						//$("#msg").html(xhr.responseJSON.message);
					
				}
			});
			localStorage.PNR = Math.floor(Math.random()*10000);
			location.href="BookingConfirmation.html";
		},
		error : function(xhr, status) {
			//bootbox.alert(status);
		}
	});
});

function getPNR() {
	console.log(localStorage.PNR);
	$("#pnr").html("Your PNR is:"+localStorage.PNR);
}

$contactForm.on('submit',function (event) {
	bootbox.alert("Thanks for contacting us. Our team will connect to you soon...");
});
function logout() {
	localStorage.clear();
	location.href = "ARS.html";
}