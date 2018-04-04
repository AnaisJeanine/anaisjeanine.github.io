$(document).ready(function() { 
	
	let windowHeight = $(window).height();

	$(window).scroll(function(event) {   
	    if ($(this).scrollTop() > windowHeight) {
	        $('.heronav').fadeTo("slow", 1.0);
    		} 
    });



// --------- FOLIO PAGE -------
	

	$.fn.toggleText = function(t1, t2){
	  if (this.text() == t1) this.text(t2);
	  else                   this.text(t1);
	  return this;
	};

	$('.project').hover( function() {
    		
    	// $(this).toggleClass('special');
    	// $('.special.one').toggleText('Tivix.com Redesign','');
		
		
	});


		



// --------- CONTACT PAGE -------
    
    $('.formsent').hide();

    $('form').submit(function(e){
    	e.preventDefault();
    	var firstName = document.getElementById("firstname").value;
    	var lastName = document.getElementById("lastname").value;
    	var email = document.getElementById("email").value;
    	var message = document.getElementById("message").value;
    	console.log("thisworks????");

    	$('.formsent p').html('¡Muchas gracias ' + firstName + '!');
    	$('.formsent').delay(500).slideDown();

    });
// --------- END CONTACT --------




});// end of .ready
    









