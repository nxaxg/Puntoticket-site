$(document).ready(function(){
    
    $(".accordion-text").hide();
    
    $(".accordion-title").click(function(){
        $(this).next(".accordion-text").slideToggle(500);
        $(this).children(".unactive").toggleClass("active");
    });
});