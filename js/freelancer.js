/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}   

$('.portfolio1').click(function(event) {
    var lang = getParameterByName('lang');
    console.log(lang);
    if(lang=='chinese'){
        $(this).attr('href','#portfolioModal1Chinese')
    }
    else{
        $(this).attr('href','#portfolioModal1')

    }
    
});

$("#e-education").click(function(e){
    $('.e-sports, .e-cultural, .e-health').css({'visibility':'hidden','display':'none'});
    $('.e-education').css({'visibility':'','display':''});
});
$("#e-cultural").click(function(e){
    $('.e-sports, .e-education, .e-health').css({'visibility':'hidden','display':'none'});
    $('.e-cultural').css({'visibility':'','display':''});
});
$("#e-health").click(function(e){
    $('.e-sports, .e-cultural, .e-education').css({'visibility':'hidden','display':'none'});
    $('.e-health').css({'visibility':'','display':''});
});
$("#e-sports").click(function(e){
    $('.e-education, .e-cultural, .e-health').css({'visibility':'hidden','display':'none'});
    $('.e-sports').css({'visibility':'','display':''});
});

$(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$('.b-volunteer').click(function() {
        $(this).parent().css('color','rgb(26, 255, 26)').append(' <i class="fa fa-check-circle fa-2x"></i>');
});
