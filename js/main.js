


// NOTE: closes menu on mobile
$('.nav a').on('click', function(){

if ($(document).width() <= 767){

$(".navbar-toggle").click();

}

});
