// Onscroll Events
var navbar = $(".nav_scroll");
$(window).bind('scroll', function () {
    // Navbar
    if($(window).scrollTop() < 100) {
        navbar.css("transform", "translateY(0px)");
    }
    if ($(window).scrollTop() > 100) {
        navbar.css("transform", "translateY(60px)");
    }

    checkSection();
    if (sidenav_active == true) {
        $(".exit_sidenav").trigger("click");
    }
});

// BUTTON HOVER EFFECTS
// RED BUTTON
$(".btn_primary").on("mouseover", function(){
    $(this).css("background-color", "transparent");
    $(this).css("color", "#DC3737");
});

$(".btn_primary").on("mouseout", function(){
    $(this).css("background-color", "#DC3737");
    $(this).css("color", "#FFF");
});

// WHITE BUTTON
$(".btn_secondary").on("mouseover", function(){
    $(this).css("text-decoration", "underline");
});

$(".btn_secondary").on("mouseout", function(){
    $(this).css("text-decoration", "none");
});


// LOADING SCREEN
$(window).on("load", function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: 0,
        easing: "linear"
    }, 1000);
    setTimeout(() => {
        $(".loading_screen").fadeOut("slow");
    }, 2000);
})


// SECTION OFFSETS
const about_offset = $("#anchor_about_btn").offset().top;
const services_offset = $(".services .title").offset().top;
const portfolio_offset = $(".portfolio_section .title").offset().top;

// ANCHORS
$(".about_btn").click(function(e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#anchor_about_btn").offset().top - 10,
        easing : "linear"
    }, 1000);
});

$(".services_btn").click(function(e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".services .title").offset().top - 65,
        easing: "linear"
    }, 1000);
});

$(".portfolio_btn").click(function(e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: portfolio_offset - 65,
        easing: "linear"
    }, 1000);
});

$(".contact_btn").click(function(e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".contact_section .title").offset().top - 65,
        easing: "linear"
    }, 1000);
});

$(".home_btn").click(function(e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: 0,
        easing: "linear"
    }, 1000);
});


// NAV ACTIVE LINK
function checkSection(){
    var windowTop = $(window).scrollTop() + 65;
    //home
    if (windowTop < $(".hero").height()) {
        $("*").removeClass("nav_active");
        $(".home_btn").addClass("nav_active");
    }
    //about        
    if (windowTop >= $(".about").offset().top && windowTop < $(".about").offset().top + $(".about").height()){
        $("*").removeClass("nav_active");
        $(".about_btn").addClass("nav_active");
    }
    //services
    if (windowTop >= $(".services").offset().top && windowTop < $(".services").offset().top + $(".services").height()){
        $("*").removeClass("nav_active");
        $(".services_btn").addClass("nav_active");
    }
    //portfolio
    if (windowTop  >= $(".portfolio_section").offset().top && windowTop < $(".portfolio_section").offset().top + $(".portfolio_section").height()){
        $("*").removeClass("nav_active");
        $(".portfolio_btn").addClass("nav_active");
    }
    //contact
    if (windowTop >= $(".contact_section").offset().top && windowTop < $(".contact_section").offset().top + $(".contact_section").height()){
        $("*").removeClass("nav_active");
        $(".contact_btn").addClass("nav_active");
    }

}

// LINKEDIN BUTTON
$(".linkedin_btn").on("click", function(){
    window.open("https://www.linkedin.com/in/augusto-pruvost/", '_blank');
});

// Services Links
$(".link_webdev").click(function () {
    setTimeout(() => {
        $("#btn_webdev").trigger("click");
    }, 1200);    
});
$(".link_wordpress").click(function () {
    setTimeout(() => {
        $("#btn_wp").trigger("click");
    }, 1200);    
});
$(".link_arreglos").click(function () {
    setTimeout(() => {
        $("#btn_arreglos").trigger("click");
    }, 1200);    
});


// sidenav
var sidenav_active = false;

$(".menu_btn").on('click', function(){
    sidenav_active = true;
    $('aside').css("transform", "translateX(0%)");
    $('.exit_sidenav').css("display", "block");
    setTimeout(() => {
        $('.exit_sidenav').css("opacity", "100%");
    }, 1);
});

$(".exit_sidenav, .sidenav_btn").on('click', function(){
    sidenav_active = false;
    $('.exit_sidenav').css("opacity", "0%");
    $('aside').css("transform", "translateX(100%)");
    setTimeout(() => {
        $('.exit_sidenav').css("display", "none");
    }, 800);
});
