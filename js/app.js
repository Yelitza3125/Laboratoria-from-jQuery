$( document ).ready(function() {
    var btn = $('#submit');
    btn.attr('disabled', true)


    var inputUser = $('#username');
    $(inputUser).keydown(function(){
        console.log(inputUser.val().length);
        if(inputUser.val().length >= 2) {
            $('p:first-of-type span').hide()
        } else { /*validar con la tecla borrar */
            $('p:first-of-type span').show()
        }
    })
    
    var inputPass = $('#password');
    $(inputPass).keydown(function(){
        console.log(inputPass.val().length);
        if(inputPass.val().length >= 5) {
            $('form p:nth-child(2) span').hide()
        } else {
            $('form p:nth-child(2) span').show()
        }
    })

    /*
    var inputPass2 = $('#password');
    $(inputPass2).keydown(function(){
        console.log(inputPass2.val().length);
        if(inputPass2.val() === inputPass.val()) {
            $('form p:nth-child(3) span').hide()
        } else {
            $('form p:nth-child(3) span').show()
        }
    }) */
    
  });

  /* $( "#target" ).keydown(function() {
  alert( "Handler for .keydown() called." );
}); */