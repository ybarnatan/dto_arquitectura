/*Control del navbar cdo estoy en mobile */ 
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
   


/* Control del form. Fuente https://www.youtube.com/watch?v=eg4e-FObyJ8 */

$(document).ready( function() {
    $('.btn-custom-form').click(function(event){

    /*Recupero las variables*/   
    var name = $('.name').val()
    var email = $('.email').val()
    var phone = $('.phone').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty() /*borro la variable statusElm antes para que este 'fresca' antes de cada paso de validacion*/ 
    
    /*Valido cada campo*/
    if ( name.length < 3) {
        event.preventDefault()  /*avoids sending the form by the default action of the send button. el formulario se enviara siempre que haya un boton de tipo submit, yo quiero que se submitee cuando clickeo y solo cuano clickeo*/  
        statusElm.append('<div class="mensaje-error-form"> • Nombre invalido. </div>')
    }

    if (email.length<5 || !email.includes('@') || !email.includes('.') ) {
       
        event.preventDefault()  /*avoids sending the form by the default action of the send button. el formulario se enviara siempre que haya un boton de tipo submit, yo quiero que se submitee cuando clickeo y solo cuano clickeo*/  
        statusElm.append('<div class="mensaje-error-form"> • Email invalido. </div>')
    }

    if ( message.length < 10) {
        event.preventDefault()  /*avoids sending the form by the default action of the send button. el formulario se enviara siempre que haya un boton de tipo submit, yo quiero que se submitee cuando clickeo y solo cuano clickeo*/  
        statusElm.append('<div class="mensaje-error-form"> • Su mensaje es muy corto. </div>')
    }

    else {
        statusElm.append('<div class="mensaje-ok-form"> Su mensaje fue enviado exitosamente. </div>')

    }

    })
})
























