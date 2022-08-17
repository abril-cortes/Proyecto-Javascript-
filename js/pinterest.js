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
        const cuerpoUsuario = document.createElement("div");
        const imagen = document.createElement("img");
        const fantasma = document.createElement("div");
        const contenedorDeBoton = document.createElement("div");
        const botonGuardar = document.createElement("button");
        const textoBoton = document.createElement("p");
        const contenedorLikes = document.createElement("div");
        const likes = document.createElement("p");
        const descripcion = document.createElement("p");
        const contenedorImagenUsuario = document.createElement("div");
        const imagenUsuario = document.createElement("img");
        const nombreUsuario = document.createElement("a");
        
        nombreUsuario.href = foto.user.links.html;
        nombreUsuario.innerText = foto.user.username;
        imagenUsuario.src = foto.user.profile_image.medium;
        likes.innerText = foto.likes + " 💚";
        descripcion.innerText = foto.alt_description;
        contenedorImagenUsuario.className = "imagen-usuario";
        contenedorLikes.className = "likes";
        cuerpoImagen.className = "cuerpo-imagen";
        imagenYFantasma.className = "imagen-y-fantasma";
        imagen.src = foto.urls.regular;
        imagen.alt = foto.alt_description;
        fantasma.id = "fantasma";
        contenedorDeBoton.className = "boton";
        textoBoton.innerText = "Guardar";
        cuerpoUsuario.className = "cuerpo-usuario";

        botonGuardar.addEventListener("click", (e) => guardarAColeccion(e, foto))
        contenedorImagenUsuario.appendChild(imagenUsuario);
        contenedorImagenUsuario.appendChild(nombreUsuario);
        cuerpoUsuario.appendChild(descripcion);
        cuerpoUsuario.appendChild(contenedorImagenUsuario);
        contenedorLikes.appendChild(likes);
        fantasma.appendChild(contenedorDeBoton);
        fantasma.appendChild(contenedorLikes);
        botonGuardar.appendChild(textoBoton);
        contenedorDeBoton.appendChild(botonGuardar);
        imagenYFantasma.appendChild(imagen);
        imagenYFantasma.appendChild(fantasma);
        cuerpoImagen.appendChild(imagenYFantasma);
        cuerpoImagen.appendChild(cuerpoUsuario);
        contenedorDeImagenes.appendChild(cuerpoImagen);

    })
}

