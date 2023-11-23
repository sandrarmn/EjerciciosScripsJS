document.addEventListener('DOMContentLoaded', function () {

    // Creamos la función accedeUsers() y pintaUsuarios(listausers)
    async function accedeUsers() {
        console.log('Se hizo clic en Usuarios');
        try {
            const listadoUsuarios = await fetch('https://jsonplaceholder.typicode.com/users');
            const usuarios = await listadoUsuarios.json();
            console.log(usuarios);
            pintaUsuarios(usuarios);
        } catch (error) {
            console.error('Error en la solicitud accedeUsers: ', error);
        }
    }


    const btnUsers = document.getElementById('botonUsuario');


    if (btnUsers) {
        btnUsers.addEventListener('click', accedeUsers);
    }


    // Creamos funcion pintaUsuarios(listausers)
    function pintaUsuarios(listausers) {
        const container = document.querySelector('.container');
        const table = document.createElement('table');
        table.classList.add('table');


        // Cabecera de la tabla
        const thead = document.createElement('thead');
        const filas = document.createElement('tr');
        ['#', 'Username', 'Email', 'Posts'].forEach(textoCab => {
            const th = document.createElement('th');
            th.scope = 'col';
            th.textContent = textoCab;
            filas.appendChild(th);
        });
        thead.appendChild(filas);
        table.appendChild(thead);


        const tbody = document.createElement('tbody');


        listausers.forEach(usuario => {
            const row = document.createElement('tr');


            // Columnas tabla
            row.innerHTML = `
                <th scope="row">${usuario.id}</th>
                <td><a href="#" class="usuario-link" data-id="${usuario.id}">${usuario.name}</a></td>
                <td>${usuario.email}</td>
                <td><a href="#" class="posts-usuario" data-id="${usuario.id}">Mostrar Posts</a></td>
            `;


            tbody.appendChild(row);
        });


        table.appendChild(tbody);


        container.innerHTML = '';
        container.appendChild(table);


        // Evento click a los enlaces de la columna Username
        const linkUsername = document.querySelectorAll('.usuario-link');


        linkUsername.forEach(link => {


            link.addEventListener('click', function (event) {
                event.preventDefault();
                const idUsuario = this.dataset.id;
                pintaUsuario(idUsuario, listausers);
            });
        });


        // Evento click a los enlaces de la columna Mostrar Post
        const linkPosts = document.querySelectorAll('.posts-usuario');


        linkPosts.forEach(link => {


            link.addEventListener('click', function (event) {
                event.preventDefault();
                const idUsuario = this.dataset.id;
                obtenerPost(idUsuario);
            });
        });
    }


    window.pintaUsuarios = pintaUsuarios;


    // Creamos funcion pintaUsuario(id)
    function pintaUsuario(id, listausers) {


        // Mostrar los datos del usuario
        const usuario = listausers.find(user => user.id == id);

        const container = document.querySelector('.container');
        const datosUsuario = document.createElement('div');
        datosUsuario.innerHTML = `
            <br>
            <h2>Datos personales de ${usuario.name}</h2>
            <p><strong>ID:</strong> ${usuario.id}</p>
            <p><strong>Name:</strong> ${usuario.name}</p>
            <p><strong>Username:</strong> ${usuario.username}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Address:</strong> ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}, ${usuario.address.zipcode}</p>
            <p><strong>Phone:</strong> ${usuario.phone}</p>
            <p><strong>Website:</strong> ${usuario.website}</p>
            <p><strong>Company:</strong> ${usuario.company.name}</p>
            <p><a href="#" class="link-volver-usuarios">Volver a la lista de usuarios</a></p>
            <p><a href="#" class="posts-usuario" data-id="${usuario.id}">Mostrar posts</a></p>
        `;


        container.innerHTML = '';
        container.appendChild(datosUsuario);


        // Evento click al enlace de vuelta a la tabla
        const linkVolverUser = document.querySelector('.link-volver-usuarios');
        linkVolverUser.addEventListener('click', function (event) {
            event.preventDefault();
            accedeUsers();
        });


        // Evento click al enlace de mostrar post
        const linkPost = document.querySelectorAll('.posts-usuario');
        linkPost.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const idUsuario = this.dataset.id;
                obtenerPost(idUsuario);
            });
        });
    }


    // Creamos la función obtenerPost(id)
    async function obtenerPost(id) {
        try {
            const listaPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            const posts = await listaPost.json();
            pintaPosts(posts);
        } catch (error) {
            console.error('Error al obtener los posts: ', error);
        }
    }


    // Creamos la función pintaPosts(posts)
    function pintaPosts(posts) {
        const container = document.querySelector('.container');
        let postInicial = 0;
        const postPorPagina = 5;

        function mostrarPosts() {
            const postFinal = postInicial + postPorPagina;
            const postsToShow = posts.slice(postInicial, postFinal);

            const contPost = document.createElement('div');

            if (postsToShow.length > 0) {
                contPost.innerHTML = '<br><h2>Posts:</h2><br>';
                postsToShow.forEach((post) => {
                    const pintPost = document.createElement('div');
                    pintPost.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                        <p><strong>Autor:</strong> <a href="#" class="link-usuario-post" data-id="${post.userId}">Usuario ${post.userId}</a></p>
                    `;
                    contPost.appendChild(pintPost);
                });

                // Añadir enlace de mostrar los siguientes 5 posts
                contPost.innerHTML += '<div style="margin-top: 15px;"><button class="btn-mostrar-siguientes">Mostrar 5 siguientes</button></div>';

                // Añadir enlace de volver a la lista de usuarios con espacio
                contPost.innerHTML += '<p style="margin-top: 20px;"><a href="#" class="link-volver-usuarios">Volver a la lista de usuarios</a></p>';
            } else {
                contPost.innerHTML = '<p>No hay post disponibles de este usuario</p>';
            }

            container.innerHTML = '';
            container.appendChild(contPost);

            // Evento click al enlace de vuelta a la tabla
            const linkVolverUser = document.querySelector('.link-volver-usuarios');
            linkVolverUser.addEventListener('click', function (event) {
                event.preventDefault();
                accedeUsers();
            });

            // Evento click al botón de mostrar los siguientes 5 posts
            const btnMostrarSiguientes = document.querySelector('.btn-mostrar-siguientes');
            btnMostrarSiguientes.addEventListener('click', function (event) {
                event.preventDefault();
                postInicial += postPorPagina;
                mostrarPosts();
            });

            // Evento click al enlace del usuario en el post
            const linkUsuarioPost = document.querySelectorAll('.link-usuario-post');
            linkUsuarioPost.forEach((link) => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    const idUsuario = this.dataset.id;
                    pintaUsuario(idUsuario, listausers);
                });
            });
        }

        mostrarPosts();
    }


    // Enlace para mostrar todos los posts
    const btnPosts = document.getElementById('botonPost');


    if (btnPosts) {
        btnPosts.addEventListener('click', async function () {
            try {
                const listadoPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts = await listadoPosts.json();
                pintaPosts(posts);
            } catch (error) {
                console.error('Error en la solicitud para obtener todos los posts: ', error);
            }
        });
    }
});
