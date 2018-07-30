function contactValidation(){
if(document.getElementsByName('name')[0].value.length==0){
document.getElementById('errorDiv').removeAttribute('style');
document.getElementById('errorMsg').innerHTML='First Name is Required';
return false;
}else if(document.getElementsByName('surname')[0].value.length==0){
document.getElementById('errorDiv').removeAttribute('style');
document.getElementById('errorMsg').innerHTML='Last Name is Required';
return false;
}else if(document.getElementsByName('email')[0].value.length==0){
document.getElementById('errorDiv').removeAttribute('style');
document.getElementById('errorMsg').innerHTML='Email ID is Required';
return false;
}else if(document.getElementsByName('message')[0].value.length==0){
document.getElementById('errorDiv').removeAttribute('style');
document.getElementById('errorMsg').innerHTML='Message is Required';
return false;
}else{
document.getElementById('successMsg').removeAttribute('style');
document.getElementById('errorDiv').setAttribute('style','display:none');
	var firstName = document.getElementsByName('name')[0].value;
	var lastName = document.getElementsByName('surname')[0].value;
	var emailID  = document.getElementsByName('email')[0].value;
	var phone = document.getElementsByName('phone')[0].value;
	var jobTitle = document.getElementsByName('jobTitle')[0].value;
	var companyName = document.getElementsByName('companyName')[0].value;
	var message = document.getElementsByName('message')[0].value;
	
	var obj = {
		"firstName" : firstName,
		"lastName"  : lastName,
		"emailID"   : emailID,
		"phone"     : phone,
		"jobTitle"  : jobTitle,
		"companyName": companyName,
		"message"   : message
	}
	//console.log(obj);
	
var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
xmlhttp.open("POST", "");
//xmlhttp.setRequestHeader("Content-Type", "application/json");
xmlhttp.send(JSON.stringify(obj));

}
}