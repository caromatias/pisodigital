$(document).ready(function(){
    $('#inicio').click(function(){
        $.scrollTo('#topPage', 800);
        $('#inicio').addClass('active');
        $('#portafolio').removeClass('active');
        $('#sobre').removeClass('active');
    });
    $('#sobre').click(function(){
        $.scrollTo('#features', 800);
        $('#inicio').removeClass('active');
        $('#portafolio').removeClass('active');
        $('#sobre').addClass('active');
    });
    $('#portafolio').click(function(){
        $.scrollTo('#sc-portafolio', 800);
        $('#inicio').removeClass('active');
        $('#portafolio').addClass('active');
        $('#sobre').removeClass('active');
    });
});