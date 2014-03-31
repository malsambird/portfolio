$(document).ready(function(){

	$("h1").fadeIn(200);
	$("h2").fadeIn(1500);

//$("body").find("*").addClass("border");

//$("body").delay(5000).queue(function(next){
//	$("body").find("*").removeClass("border");
//});


$("#headshot").delay(2100).queue(function(next){
	$(this).fadeIn(100);
	next();
});

$("#hello").delay(4000).queue(function(next){
	$(this).fadeIn(800);
	next();
});


$("#title").delay(2000).queue(function(next){
$(this).removeClass("title_initial").addClass("title_afterintro");
	$("#nav_work").addClass("current_tab");
    $("#content").fadeIn(1000);
    
	$("#work").fadeIn(2000);
   next();
});



$("#nav_work").click(function(event){
	event.preventDefault();
	$(".section").hide();
	$(".current_tab").removeClass("current_tab");
	$(this).addClass("current_tab");
	$("#work").slideDown(1200);
	$("#hello").hide();
	$("#message").text("These are my latest projects.");
	$("#hello").fadeIn(1500);
});

$("#nav_contact").click(function(event){
	event.preventDefault();
	$(".section").hide();
	$(".current_tab").removeClass("current_tab");
	$(this).addClass("current_tab");
	$("#contact").slideDown('slow');
	$("#hello").hide();
	$("#message").text("Let's connect. Feel free to send me a message!");
	$("#hello").fadeIn(1500);
});

$("#nav_about").click(function(event){
	event.preventDefault();
	$(".section").hide();
	$(".current_tab").removeClass("current_tab");
	$(this).addClass("current_tab");
	$("#about").slideDown('slow');
	$("#hello").hide();
	$("#message").text("Here's a bit about me!");
	$("#hello").fadeIn(1500);
});

});