$( document ).ready(function() {

	$(".toggle-1").show("fast");
    

$( ".title-1" ).click(function() {
	$(".toggle-2").hide("fast");
	$(".toggle-3").hide("fast");
  $( ".toggle-1" ).slideToggle( "fast" );
});

$( ".title-2" ).click(function() {
	$(".toggle-1").hide("fast");
	$(".toggle-3").hide("fast");
  $( ".toggle-2" ).slideToggle( "fast" );
});

$( ".title-3" ).click(function() {
	$(".toggle-1").hide("fast");
	$(".toggle-2").hide("fast");
  $( ".toggle-3" ).slideToggle( "fast" );
});

$(".menu").click(function () {
	$(".content").addClass("show")
	$(".content").addClass("slide");
	$(".close").addClass("show");


});

$(".close").click(function () {
	$(".content").removeClass("slide");
	$(".content").removeClass("show")
	$(".close").removeClass("show");
});

});