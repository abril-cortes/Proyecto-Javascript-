fetch("../assets/photos.json").then((respuesta) => respuesta.json()).then((fotosRespuesta) => {
    mostrarImagenes(fotosRespuesta)
});

let fotosGuardadas = JSON.parse(localStorage.getItem("colecciones"));
function guardarAColeccion(e, f) {
    
    if (!fotosGuardadas) {
       localStorage.setItem("colecciones", JSON.stringify([]));
       fotosGuardadas = JSON.parse(localStorage.getItem("colecciones"));
    }
    const fotoDuplicada = fotosGuardadas.find((foto) => foto.id == f.id);
    if (!fotoDuplicada) {
        fotosGuardadas.push(f);
    }
    localStorage.setItem("colecciones", JSON.stringify(fotosGuardadas));
}

function mostrarImagenes(fotos) {
    const contenedorDeImagenes = document.getElementById("contenedor-de-imagenes");
    fotos.forEach((foto) => {
        const cuerpoImagen = document.createElement("div");
        const imagenYFantasma = document.createElement("div");
        const imagen = document.createElement("img");
        const fantasma = document.createElement("div");
        const contenedorDeBoton = document.createElement("div");
        const botonGuardar = document.createElement("button");
        const textoBoton = document.createElement("p");
        const contenedorLikes = document.createElement("div");
        const likes = document.createElement("p");
        const cuerpoUsuario = document.createElement("div");
        const descripcion = document.createElement("p");
        const contenedorImagenUsuario = document.createElement("div");
        const imagenUsuario = document.createElement("img");
        const nombreUsuario = document.createElement("a");
        

        nombreUsuario.innerText = foto.user.username;
        nombreUsuario.href = foto.user.links.html;
        imagenUsuario.src = foto.user.profile_image.medium;
        contenedorImagenUsuario.className = "imagen-usuario";
        descripcion.innerText = foto.alt_description;
        cuerpoUsuario.className = "cuerpo-usuario";
        likes.innerText = foto.likes + " 💚";
        contenedorLikes.className = "likes";
        textoBoton.innerText = "Guardar";
        contenedorDeBoton.className = "boton";
        fantasma.id = "fantasma";
        imagen.alt = foto.alt_description;
        imagen.src = foto.urls.regular;
        imagenYFantasma.className = "imagen-y-fantasma";
        cuerpoImagen.className = "cuerpo-imagen";


        botonGuardar.addEventListener("click", (e) => guardarAColeccion(e, foto));
        imagenYFantasma.appendChild(imagen);
        botonGuardar.appendChild(textoBoton);
        contenedorDeBoton.appendChild(botonGuardar);
        fantasma.appendChild(contenedorDeBoton);
        contenedorLikes.appendChild(likes);
        fantasma.appendChild(contenedorLikes);
        imagenYFantasma.appendChild(fantasma);
        cuerpoImagen.appendChild(imagenYFantasma);
        cuerpoUsuario.appendChild(descripcion);
        contenedorImagenUsuario.appendChild(imagenUsuario);
        contenedorImagenUsuario.appendChild(nombreUsuario);
        cuerpoUsuario.appendChild(contenedorImagenUsuario);
        cuerpoImagen.appendChild(cuerpoUsuario);
        contenedorDeImagenes.appendChild(cuerpoImagen);

    })
}

