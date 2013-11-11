function validarNum(e)
{
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /\d/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}
function checkMailCon(txMail)
{
    var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;
    if ( ! filter.test(txMail) )
    {
        mensaje('bad', 'Incorrect email address / Dirección de email incorrecta');
        document.getElementById('mail');
        event.returnValue = false; //para IE
        return false;
    }
    return true;
}
function mensaje(contexto, mensaje)
{
    $("#mensaje").slideDown('fast');
    $("#mensaje center p").attr('class', contexto);
    $("#mensaje center p").html(mensaje);
    setTimeout(function() {$("#mensaje").slideUp('slow');},3000);
}
function validaSoloLetras(e)
{
    //incluida la Ñ y la ñ
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8) return true;
    patron =/[A-Za-zñÑ\s]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}