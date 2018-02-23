function age(){
	var dob = document.getElementById("dob").value;
	var current_date= new Date();
	 current_date().getDate();
	 current_date().getMonth();
	 current_date().getFullYear();
     
     console.log(current_date - dob);
}