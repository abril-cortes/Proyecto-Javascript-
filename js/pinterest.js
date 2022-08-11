 let responseClone;
 fetch("../assets/icons/photos.json").then((respuesta) => { 
    responseClone = respuesta.clone()
    return respuesta.json()
    }).then((fotosRespuesta) => {
     mostrarImagenes(fotosRespuesta)
 }, (error)=> {
    console.log(responseClone);
    console.log(error);
    responseClone.text().then((texto)=> console.log(texto));
 });

let mensaje = "";
let productoSeleccionado;
let cantidad;
let precioTotal;
   
const productos = [{
    id: 0,
    nombre: "Imagen Standard",
    valor: 1500
},
{
    id: 1,
    nombre: "Imagen HD",
    valor: 3000
}, 
{
    id: 2,
    nombre: "Imagen 4K",
    valor: 500
}, 
{
    id: 3,
    nombre: "Imagen 8K", 
    valor: 10000
}, 
{
    id: 4,
    nombre: "Video Standard",
    valor: 300
}, 
{
    id: 5,
    nombre: "Video HD",
    valor: 1200
}];

function calcular() { 
    productos.forEach((producto) => {
        mensaje+="\n" + producto.nombre + "(" + producto.id + ")";
    });
    productoSeleccionado = parseInt(prompt("Ingrese el id del formato de foto o video que desea: " + mensaje));
    cantidad = parseInt(prompt("Ingrese la cantidad: "));
    let productoEncontrado = false;
    productos.forEach((producto) => {
        if (producto.id == productoSeleccionado) {
            productoEncontrado = true;
        }
    });
    if (productoEncontrado) {
        precioTotal = alert("Precio total:" + " " + realizarCalculo(productoSeleccionado, cantidad));
    } else {
        const productoAgregado = prompt("Lo sentimos, no tenemos ese formato todavía, ingréselo para agregarlo al catálogo próximamente ");
        const costoDelNuevoProducto = prompt("Cuanto quisieras que cueste este producto?");
        agregarProducto(productoAgregado, costoDelNuevoProducto);
        
    }
}

function realizarCalculo(productoSeleccionado, cantidad) {
    let productoAcalcular;
    productos.forEach((producto) => {
        if (productoSeleccionado == producto.id) {
            productoAcalcular = producto;
        }
    });
    return productoAcalcular.valor * cantidad;
}

function agregarProducto(nombre, valor) {
    if (nombre != "") {
        productos.push({nombre: nombre, valor: valor});
        console.warn("Se ha agregado el formato: "  + nombre + ", vamos a hacer lo posible para que este disponible pronto! y que cueste " + valor);
    }
}
//calcular();


//const nuevoParrafo = document.createElement('p');
// contenedorDeImagenes.className = "soy una clase dinamica"
// contenedorDeImagenes.innerText;
//contenedorDeImagenes.style = "color: red";
//contenedorDeImagenes.appendChild(nuevoParrafo);

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

