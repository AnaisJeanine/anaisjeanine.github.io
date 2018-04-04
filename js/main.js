$(document).ready(function() { 
	
	let windowHeight = $(window).height();

	$(window).scroll(function(event) {   
	    if ($(this).scrollTop() > windowHeight) {
	        $('.heronav').fadeTo("slow", 1.0);
    		} 
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


    	$('.formsent').fadeIn();

    });
// --------- END CONTACT --------


    // $(window).resize(function(event) {
    // 	// change that variable..
    // 	$(window).scroll(function(event) {   
	   //  if ($(this).scrollTop() > windowHeight) {
	   //      $('.heronav').fadeTo("slow", 1.0);
    // } 
    // })

    // $(".name").hover(function(){
    // 	console.log("hover works?");
    //     $(".one").animate({top: '-10px'});
    // },
    // function(){
    //      $(".one").animate({top: '10px'});
    // }); 


    // $(".name").mouseenter(function(){
    // 	console.log("hover works?");
    //     // $(".one").animate({top: '-10px'});
    // }); 



});// end of .ready
    









