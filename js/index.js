let mensaje = "";
let productoSeleccionado;
let cantidad;
let precioTotal;
// array de elementos cargados.
const productos = [{
    id: 0,
    nombre: "Remera",
    valor: 1500
},
{
    id: 1,
    nombre: "Pantalon",
    valor: 3000
}, 
{
    id: 2,
    nombre: "Gorro",
    valor: 500
}, 
{
    id: 3,
    nombre: "Zapatillas", 
    valor: 10000
}, 
{
    id: 4,
    nombre: "Medias",
    valor: 300
}, 
{
    id: 5,
    nombre: "Top",
    valor: 1200
}];

let productoAgregado;

function calcular() { 
    productos.forEach((producto) => {
        mensaje+="\n" + producto.nombre + "(" + producto.id + ")";
    });
    productoSeleccionado = parseInt(prompt("Ingrese el id del producto que desea: " + mensaje));
    cantidad = parseInt(prompt("Ingrese la cantidad seleccionada de ese producto"));
    let productoEncontrado = false;
    productos.forEach((producto) => {
        if (producto.id == productoSeleccionado) {
            productoEncontrado = true;
        }
    });
    if (productoEncontrado) {
        precioTotal = alert("Precio total:" + " " + realizarCalculo(productoSeleccionado, cantidad));
    } else {
        productoAgregado = prompt("Lo sentimos, no tenemos disponibilidad de ese producto aun. Ingrese el producto que desea incluir en nuestro catalogo: ");
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
        console.warn("Se ha agregado el producto: "  + productoAgregado + ", vamos a hacer lo posible para que este disponible pronto!");
    }
}
calcular();