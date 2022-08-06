// let fotos;
// fetch("../assets/photos.json").then((respuesta) => respuesta.json()).then((fotosRespuesta) => {
//     fotos = fotosRespuesta;
//     console.log(fotos);
// });

let mensaje = "";
let productoSeleccionado;
let cantidad;
let precioTotal;
// array de elementos cargados.
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

let productoAgregado;

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
        productoAgregado = prompt("Lo sentimos, no tenemos ese formato todavía, ingréselo para agregarlo al catálogo próximamente ");
        agregarProducto();
        
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

function agregarProducto() {
    if (productoAgregado != "") {
        productos.push(productoAgregado);
        console.warn("Se ha agregado el formato: "  + productoAgregado + ", vamos a hacer lo posible para que este disponible pronto!");
    }
}
calcular();