
let tableroInfo = JSON.parse(localStorage.getItem("tablero"));

function mostrarImagenes() {
    let arrayPins = tableroInfo.pines;
    arrayPins = [...arrayPins];
    console.log(arrayPins);
    const contenedorImagenes = document.getElementById("contenedor-de-imagenes");
    arrayPins.forEach((pin) => {
        const cuerpoImagen = document.createElement("div");
        const imagen = document.createElement("img");
        const descripcion = document.createElement("p");

        descripcion.innerText = pin.alt_description;
        imagen.alt = pin.alt_description;
        imagen.src = pin.urls.regular;
        cuerpoImagen.className = "cuerpo-imagen";

    
        cuerpoImagen.appendChild(imagen);
        cuerpoImagen.appendChild(descripcion);
        contenedorImagenes.appendChild(cuerpoImagen);
    });
}

mostrarImagenes();
