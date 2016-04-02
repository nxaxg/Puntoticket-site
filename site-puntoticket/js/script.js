$(document).ready(function(){
	//langmenu
    $(".lang").hide();
    $('#langbtn').click(function(){
        $(this).toggleClass("lang-action");
        $('.lang').slideToggle(500); 
    });
    
    //burguer-menu action
    $(".navmenu").hide();   
    $('#menuicon').click(function(){
        $('#menuicon').toggleClass("menu-action");
        $(".navmenu").slideToggle(500);
	});
    
    //cat-menu
    $(".cat-menu").hide();
    $("#catbtn").click(function(){
        $("#cat-arrow").toggleClass("cat-action");
       $(".cat-menu").slideToggle(500); 
    });
    
    //slider action
    //http://unslider.com/
    $('#slider-main').unslider({
        autoplay: true,
        infinite: true,
        delay: 5000,
        nav: false,
        arrows: false
    });
    
    
    
    //burguermenu
    
});