
function submitF(){
	// verify if the first name field has been written on
	var lName=document.getElementById("lName")
	var fName=document.getElementById("fName")
	var age=document.getElementById("age")
	var bday=document.getElementById("birth")
	var pnum=document.getElementById("phone")
	var email=document.getElementById("email")

		//check name 
	if(fName.checkValidity()==false ){
		document.getElementById("a").innerHTML= "Please enter avalid name"
	}
	else{
		document.getElementById("a").innerHTML= "Thanks."
	} 
//check last name
	if(lName.checkValidity()==false ){
		document.getElementById("b").innerHTML= "Please enter a valid name"
	}
	else{
		document.getElementById("b").innerHTML= "Thanks."
	} 

	//check age 
	if(age.validity.rangeUnderflow){
		document.getElementById("c").innerHTML= "You are too young."
	}
	else if (age.validity.rangeOverflow){ 
		document.getElementById("c").innerHTML= "Please enter a vaild age."
	} 
	else{
		var vote=(age.value <18)? "You are too young.": "You are an adult."
		document.getElementById("c").innerHTML= vote
	}
	//check birthday
	var bday=document.getElementById("birth").value

var slash=bday.indexOf("/")
	if ((slash <=1)||(slash >=3)||(bday.length <10)){


	document.getElementById("d").innerHTML= "Please input the proper date format"
		
	}
	else {
	document.getElementById("d").innerHTML= "Thanks." 	
	}
	//check phone 
	if(pnum.validity.rangeUnderflow){
		document.getElementById("e").innerHTML= "Invalid phone number"	
	}
	else if (pnum.validity.rangeOverflow){ 
		document.getElementById("e").innerHTML= "Invaild phone number"
	} 
	else {
	document.getElementById("e").innerHTML= "Thanks." 	
	}
	//check email 
	var email=document.getElementById("email").value
	var dot=email.lastIndexOf(".")
	var aroba=email.indexOf("@")
	if (aroba !=1 || dot<1){
			document.getElementById("g").innerHTML= "Please verify that your email contains the @ and period symbols" 	
	}
	else {
	document.getElementById("g").innerHTML= "Thank you" 	
	}
	//redirection command - open page to send to another page

} 