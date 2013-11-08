$(document).ready(function(){
    $('#sobre').click(function(){
        $.scrollTo('#features', 800);
        $('#portafolio').removeClass('active');
        $('#sobre').addClass('active');
    });
    $('#portafolio').click(function(){
        $.scrollTo('#sc-portafolio', 800);
        $('#portafolio').addClass('active');
        $('#sobre').removeClass('active');
    });
});