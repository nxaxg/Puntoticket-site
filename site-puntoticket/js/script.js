$(document).ready(function(){
	
    //burguer-menu action
    $('#menuicon').click(function(){
		$(this).toggleClass('menu-action');
	});
    
    //slider action
    //http://unslider.com/
    $('#slider-main').unslider({
        autoplay: true,
        infinite: true,
        delay: 8000,
        nav: false,
        arrows: false
    });
});