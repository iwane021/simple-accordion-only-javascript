//Accordion Head
		var parentacc = document.getElementById("pt-accordion-id");
		parentacc.addEventListener("click", function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.display === "block") {
		      panel.style.display = "none";
		    } else {
		      panel.style.display = "block";
		    }
	  	});

	  	function hidePtAccordion(x) {
	        if (x.matches) {
	            //mobile
	            parentacc.classList.remove("active");
	            parentacc.nextElementSibling.style.display = "none";
	        }
	        else {
	        	parentacc.classList.toggle("active");
	            parentacc.nextElementSibling.style.display = "block";
	        }
	    }
	    var x = window.matchMedia("(max-width: 700px)");
	    hidePtAccordion(x);
	    x.addListener(hidePtAccordion);

	    //Accordion Detil
		var acc = document.querySelectorAll("button.bt-accordion");
		for (var i = 0; i < acc.length; i++) {
		  acc[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight) {
		      	panel.style.maxHeight = null;
		    } else {
		    	hideAll(this);
	    		panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
		  });
		}

		function hideAll(exceptThis) {
		  	for (var i = 0; i < acc.length; i++) {
			    if (acc[i] !== exceptThis) {
			      acc[i].classList.remove("active");
			      acc[i].nextElementSibling.style.maxHeight = null;
			    }
			}
		}