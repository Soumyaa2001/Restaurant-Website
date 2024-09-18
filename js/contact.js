
	function fn(){
	var str=form.name.value;
	if(str.length==0){
		alert("Nmae is required");
		return false;
	}
	var str1=form.email.value;
	if(str1.length==0){
		alert("Email is required");
		return false;
	}
	var str2=form.phone.value;
	if(str2.length==0){
		alert("Phone No is required");
		return false;
	}
	var str3=form.message.value;
	if(str3.length==0){
		alert("Message is required");
		return false;
	}
	}