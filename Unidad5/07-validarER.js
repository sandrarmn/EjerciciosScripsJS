window.addEventListener("DOMContentLoaded", function(){
    const email = document.querySelector("#email");
    const formulario = document.querySelector("#formulario");
    const cp = document.querySelector("#cp");

    formulario.addEventListener("submit", function(evento){
        evento.preventDefault();
        evento.stopPropagation();

        let valido = true;
        
        if(!validaEmail(email)){
            valido = false;
        }

        if(!validaCP(cp)){
            valido = false;
        }

        if(valido){
            this.submit();
        }

        function validaEmail(el){
            const erMail=/^[-/w.%+]{1,64}@(?:[A-Z0-9]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            if(erMail.test(el.value.trim())){
                marcarValido(el);
                return true;
            }else {
                marcarError(el,"El email no tiene formato válido");
                return false;
            }
        }

        function validaCP(el){
            const erCP = /^[0-5][0-9]{4}$/;
            const cpvalue = el.value.trim();
            if(cpvalue.match(erCP)){
                marcarValido(el);
                return true;
            }else {
                marcarError(el,"El código postal no es correcto");
                return false;
            }
        }

        function marcarError(e1, mensaje) {
            e1.parentNode.querySelector(".error-feedback").textContent = mensaje;
            e1.parentNode.classList.add("error"); // Remove the dot before "error"
        };
    
        function marcarValido(e1) {
            e1.parentNode.querySelector(".error-feedback").textContent = " ";
            e1.parentNode.classList.remove("error"); // Remove the dot before "error"
        };
    });
});