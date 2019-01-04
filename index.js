$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 5){
			$("#tenant").css("margin-left","10px");
			$(".sticky").addClass("fixed-top ");
			$(".navbar").css("background-color","black");
		}
		else{
			$("#tenant").css("margin-left","200px");
			$(".sticky").removeClass("fixed-top ");
			$(".navbar").css("background-color","transparent");
		}
	});
});