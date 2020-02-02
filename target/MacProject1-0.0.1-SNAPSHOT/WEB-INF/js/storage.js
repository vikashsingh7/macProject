
			var userFlag1 = false;
			var userFlag2 = false;
			var emailFlag = false;
			var passwordFlag = false;
			var mobileFlag = false;
			
			function validateFName(){
				document.getElementById('msg').innerHTML = '';
				var length = document.getElementById("inputFname").value.length;
				if (length < 5 || length > 10) {
					document.getElementById('fn').innerHTML = 'Firstname should have minimum 5 characters and maximum 10!!';
				} else {
					 userFlag1=true;
					 document.getElementById('fn').innerHTML = '';
				}
			}
            function validateLName(){
				document.getElementById('msg').innerHTML = '';
				var length = document.getElementById("inputLname").value.length;
				if (length < 5 || length > 10) {
					document.getElementById('ln').innerHTML = 'Lastname should have minimum 5 characters and maximum 10!!';
				} else {
					 userFlag2=true;
					 document.getElementById('ln').innerHTML = '';
				}
			}
			
			function validateEmail(){
				document.getElementById('msg').innerHTML = '';
				var emailPattern = new RegExp("(?=.*@)(?=.+.com)");
					if (!(emailPattern.test(document.getElementById("inputEmail").value))) {
						document.getElementById('em').innerHTML = 'Email id should contain @ and .com in it!!';
					} else {
							emailFlag=true;
							document.getElementById('em').innerHTML = '';
					}
			}
			
			function validateMobile(){
				document.getElementById('msg').innerHTML = '';
				 var phonePattern = new RegExp("(?=[0-9]{10})");
					if (!(phonePattern.test(document.getElementById("inputMobNumber").value))) {
						document.getElementById('mb').innerHTML = 'Mobile number should be exactly ten digits!!';
					} else {
							mobileFlag=true;
							document.getElementById('mb').innerHTML = '';
							
					}
			}
			
			function validatePassword(){
				document.getElementById('msg').innerHTML = '';
				 var passwordPattern = new RegExp("(?=.*\[0-9])(?=.*[a-zA-Z])(?=.*[@#$%!^&*+_])");
					if (!(passwordPattern.test(document.getElementById("inputPassword").value))){
						document.getElementById('pwd').innerHTML = 'Weak password!!';
					}else{
						passwordFlag=true;
						document.getElementById('pwd').innerHTML = '';
					}
			}
			

function setUserValue()
            {
			       if(userFlag1 && userFlag2 && emailFlag && mobileFlag && passwordFlag){            
	
                    localStorage.setItem('Email',document.getElementById("inputEmail").value);
                    localStorage.setItem('Password',document.getElementById("inputPassword").value);
                    localStorage.setItem('Username',document.getElementById("inputFname").value);
					                
                    location.assign('NewIndex.html');
                 }
                 else
                	 {
                	 
                	 document.getElementById('msg').innerHTML = 'Please enter all the fields appropriately!!!';
                	 }
                 
				
            }

function retriveData()
{
	if(typeof(Storage)!=="undefined")
	{
       document.getElementById('Username').innerHTML+=localStorage.getItem("Username");
      
	}
	else
	{
	}
}

function resetLoginForm()
{
	$(".error").hide();
	$("#loginform")[0].reset();
}

function resetSignUpForm()
{
	$(".error").hide();
	$("#signupform")[0].reset();
}
function logOut()
{
	
    location.assign('NewIndex.html') ; 
}
