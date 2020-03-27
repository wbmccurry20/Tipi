$(document).ready(function() {
	/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
	function openNav() {
	  document.getElementById("mySidebar").style.width = "250px";
	  document.getElementById("main").style.marginLeft = "250px";
	  document.getElementById("open-clck").style.visibility = "hidden";
	}

	/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
	function closeNav() {
	  document.getElementById("mySidebar").style.width = "0";
	  document.getElementById("main").style.marginLeft = "0";
	  document.getElementById("open-clck").style.visibility = "visible";
	}
	
	function openForm() {
		document.getElementById("myForm").style.display = "block";
	}

	function closeForm() {
	  document.getElementById("myForm").style.display = "none";
	}

	$("#chat-open").click(openForm);
	$("#chat-clse").click(closeForm);
	$("#open-clck").click(openNav);
	$("#close-clck").click(closeNav);
});

