$(document).ready(function(){

//based on code from here: https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
// comment posted by Tom Pažourek

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $(window).on('resize scroll', function() {
        if ($('#elebeatle').isInViewport()) {
            console.log('elebeatle is visible');
            $('#elebeatle').addClass("start");
    }});
    $(window).on('resize scroll', function() {
        if ($('#table').isInViewport()) {
            console.log('table is visible');
            $('#table').addClass("start");
    }});
    $(window).on('resize scroll', function() {
        if ($('#gun').isInViewport()) {
            console.log('gun is visible');
            $('#gun').addClass("start");
    }});
    $(window).on('resize scroll', function() {
        if ($('#ford').isInViewport()) {
            console.log('ford is visible');
            $('#ford').addClass("start");
    }});




})