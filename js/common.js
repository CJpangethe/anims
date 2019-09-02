$(document).ready(function(){
    $('.fire__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    var doc1 = $("#doc1"),
        doc2 = $("#doc2");

    doc1.on('click', function(e) {
        e.preventDefault();

        doc1.toggleClass("show");
    });

    doc2.on('click', function(e) {
        e.preventDefault();

        doc2.toggleClass("show");
    });

    $('.happ__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

});