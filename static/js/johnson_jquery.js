$(document).ready(function() {
	// regex pattern for name
	var namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	
	// regex pattern for email
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	// regex pattern for phone
	var phonePattern = /^[2-9]\d{2}-\d{3}-\d{4}/;
	
	// set focus on name field
	$("#name").focus();
	
	// deploy datepicker widget for event_date field
	$("#event_date").datepicker();
	
	// deploy timepicker widget for timepicker field
	$('input.timepicker').timepicker({
		timeFormat: 'h:mm p',
		interval: 30,
		minTime: '10',
		maxTime: '9:00pm',
		defaultTime: '11',
		startTime: '10:00',
		dynamic: false,
		dropdown: true,
		scrollbar: true
	});

	// event handler for submit
	$("#submit").click(function (event) {
		var isValid = true;
		//////////////////////////////////////////////////////////
		// capture name for testing
		var name = $("#name").val().trim();
		
		// test for name
		if (name == ""){
			$("#name").next().text("Please enter a name.");
			isValid = false;
		} else if (!namePattern.test(name)) {
			$("#name").next().text("Please enter a valid name.");
			isValid = false;
		} else {
			$("#name").next().text("");
		}
		$("#name").val(name);
		//////////////////////////////////////////////////////////
		// capture email to be tested
		var email = $("#email").val().trim();
		
		// test for emails
		if (email == ""){
			$("#email").next().text("Please enter an email.");
			isValid = false;
		} else if (!emailPattern.test(email)){
			$("#email").next().text("Please enter a valid email.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}
		$("#email").val(email);
		//////////////////////////////////////////////////////////
		// capture phone to be tested
		var phone = $("#phone").val().trim();
		
		// test for phone
		if (phone == ""){
			$("#phone").next().text("Please enter a phone number.");
			isValid = false;
		} else if (!phonePattern.test(phone)){
			$("#phone").next().text("Please enter a valid phone number.");
			isValid = false;
		} else {
			$("#phone").next().text("");
		}
		$("#phone").val(phone);
		//////////////////////////////////////////////////////////
		// tests if the form is valid and prevents submission on failure
		if(!isValid){
			event.preventDefault();
		}
		
	}); // end submit
	
}); // end ready