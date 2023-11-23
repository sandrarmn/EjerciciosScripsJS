document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.form-signin');

    if (formulario) {
        formulario.addEventListener('submit', async function (evento) {
            evento.preventDefault();

            const emailInput = document.getElementById('inputEmail');
            const contraseñaInput = document.getElementById('inputPassword');

            const email = emailInput.value;
            const contraseña = contraseñaInput.value;

            // Función para mostrar el mensaje de error encima del label del email
            function mostrarError(mensaje) {
                const mensajeError = document.createElement('div');
                mensajeError.className = 'error-message';
                mensajeError.textContent = mensaje;

                // Estilos para el mensaje de error
                mensajeError.style.color = 'red';

                // Insertamos el mensaje de error encima del label del email
                const labelEmail = document.querySelector('label[for="inputEmail"]');
                labelEmail.parentElement.insertBefore(mensajeError, labelEmail);

                // Eliminamos el mensaje de error al volver a intentar
                emailInput.addEventListener('input', function () {
                    mensajeError.remove();
                });
            }

            async function verificarUsuario(email, contraseña) {
                try {
                    const listadoUsuarios = await fetch('https://jsonplaceholder.typicode.com/users');
                    const usuarios = await listadoUsuarios.json();

                    const verificarUsuario = usuarios.find(usuario => usuario.email === email && usuario.address.zipcode === contraseña);

                    if (verificarUsuario) {
                        window.open('blog.html', '_self');
                    } else {
                        mostrarError('Correo o contraseña incorrectos');
                    }
                } catch (error) {
                    console.error('Error en la solicitud verificarUsuario: ', error);
                }
            }

            verificarUsuario(email, contraseña);
        });
    } else {
        console.error('No se encontró el formulario');
    }
});
