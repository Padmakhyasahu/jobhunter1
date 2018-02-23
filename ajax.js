function one()
{
	if(window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		var xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		   document.getElementById("msg").innerHTML= this.responseText;
		}
	}
	var url = "home.html";
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
	
}
function two()
{
	if(window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		var xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		   document.getElementById ("msg").innerHTML= this.responseText;
		}
	}
	var url = "about.html";
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
function three()
{
	if(window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		var xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		   document.getElementById ("msg").innerHTML= this.responseText;
		}
	}
	var url = "login.html";
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

	