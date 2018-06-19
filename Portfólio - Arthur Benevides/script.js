$(function(){
	$("button").on("click",function(){
		var text = $(this).text();
		swal("SIMMMMMMMMMM!!!");
	});
});

$(document).ready(function(){
	$("img").animate({width: '+=20px', height: '+=20px',}, 8000);
});


/* Bounce function
$(document).ready(function(){
	down();
});

function down (){
	$("#perfil").animate({top: "50px" }, 2000, up);
}

function up (){
	$("#perfil").animate({top: "0px" }, 2000, down);
}
*/