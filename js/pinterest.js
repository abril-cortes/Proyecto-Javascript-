fetch("../assets/photos.json").then((respuesta) => respuesta.json()).then((fotosRespuesta) => {
    mostrarImagenes(fotosRespuesta)
});


const contenedorModal = document.querySelector("#modal-tablero");
let coleccionesGuardadas = JSON.parse(localStorage.getItem("colecciones"));

// CERRAR MODAL
const botonCerrar = document.getElementById("cerrar");
botonCerrar.addEventListener("click", () => {
    contenedorModal.classList.remove("mostrar");
});


// FUNCION MODAL GUARDAR
function abrirModalGuardar(e, foto) {
    console.log(e);
    if (!coleccionesGuardadas) {
        localStorage.setItem("colecciones", JSON.stringify([
        {
            nombre: "Todos los Pines",
            pines: []
        }
        ]));
        coleccionesGuardadas = JSON.parse(localStorage.getItem("colecciones"));
    }
    contenedorModal.classList.add("mostrar");
    const tablerosCreados = JSON.parse(localStorage.getItem("colecciones"));
    const contenedorTableros = document.getElementById("contenedor-tableros");
    contenedorTableros.innerText = "";
    tablerosCreados.forEach((tablero) => {
        const pTablero =  document.createElement("button");
        pTablero.innerText = tablero.nombre;
        pTablero.className = "parrafo-tablero"; 
        pTablero.addEventListener("click", () => guardarAColeccion(foto, tablero.nombre));
        contenedorTableros.appendChild(pTablero);
    });
}


// FUNCION GUARDAR FOTO A TABLERO
function guardarAColeccion(f, nombre) {
    const fotoDuplicada = coleccionesGuardadas.find((coleccion) => coleccion.nombre == nombre)?.pines.find((foto) => foto.id == f.id);
    // if (!fotoDuplicada) {
    //     coleccionesGuardadas.find((coleccion) => coleccion.nombre == nombre).pines.push(f);
    // }
    // OP AND
    !fotoDuplicada == true && coleccionesGuardadas.find((coleccion) => coleccion.nombre == nombre).pines.push(f);
    localStorage.setItem("colecciones", JSON.stringify(coleccionesGuardadas));
    contenedorModal.classList.remove("mostrar");
}

// FUNCION MOSTRAR IMAGENES HTML
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

    
        botonGuardar.addEventListener("click", (e) => abrirModalGuardar(e, foto));
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
    });
}

