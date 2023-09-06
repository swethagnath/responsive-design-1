$(document).ready(function(){
    $(window).on('load', function(){
        $('.loader').fadeOut(1000);
    })
    $('ul li a').click(function(){
        $('ul li a').removeClass('active')
        $(this).addClass('active')
    })

    $('.menu i').click(function(){
        $('header .navbar').slideToggle()
        $(this).toggleClass('fa-solid fa-xmark')
    })
})