$(document).ready(function () {
    //
    //JAVASCRIPT
    
    "use strict";
    
    //LANG-MENU
    $(".lang-menu").hide();
    $("#lang-btn").click(function () {
        //hide burger-menu
        $(".burguer-menu").slideUp(200);
        //rotate up burguer-btn
        $("#burguer-btn").removeClass("burguer-menu-action");
        //rotate up categ-btn
        $("#categ-icon").removeClass("categ-menu-action");
        //rotate up lang-btn
        $(this).toggleClass("lang-menu-action");
        //show lang-menu
        $(".lang-menu").slideToggle(500);
    });

    //BURGUER-MENU
    $(".burguer-menu").hide();
    $("#burguer-btn").click(function () {
        //hide lang-menu
        $(".lang-menu").slideUp(200);
        $("#lang-btn").removeClass("lang-menu-action");
        //hide categ-menu
        $(".categ-menu").slideUp(200);
        //rotate up categ-icon
        $("#categ-icon").removeClass("categ-menu-action");
        //rotate up burger-btn
        $("#burguer-btn").toggleClass("burguer-menu-action");
        //show burguer-menu
        $(".burguer-menu").slideToggle(500);
    });

    //CATEGORIES-MENU
    $(".categ-menu").hide();
    $("#categ-btn").click(function () {
        //rotate up categ-icon
        $("#categ-icon").toggleClass("categ-menu-action");
        //show categ-icon
        $(".categ-menu").slideToggle(500);
    });

    //CERRAR-BTN
    $("#cerrar-btn").click(function () {
        //hide categ-menu
        $(".categ-menu").slideUp(200);
        //rotate up categ-btn
        $("#categ-icon").removeClass("categ-menu-action");
        //rotate up burguer-btn
        $("#burguer-btn").removeClass("burguer-menu-action");
        //hide burguer-menu
        $(".burguer-menu").slideUp(500);
    });

    //HIDDEN EVENTS
    $("#ver-mas-btn").click(function (e) {
        $(".hidden-fig:hidden").slice(0, 6).fadeIn(2000);
        if ($(".hidden-fig:hidden").length === 0) {
            $("#ver-mas-btn").html("No hay más eventos para mostrar");
            $('#ver-mas-btn').removeClass("to-press-btn");
            $("#ver-mas-btn").addClass("pressed-btn");
            e.preventDefault();
        }
    });
    
    //filtro-evento
    $(".filtro-option").click(function () {
        $(".filtro-ev div").removeClass("filtro-selected");
        $(this).addClass("filtro-selected");
    });
});