let mensaje = "";
let productoSeleccionado;
let cantidad;
let precioTotal;
let productos = [{
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
}];

function calcular() { 
    for (let i = 0; i < productos.length; i++) {
        mensaje+="\n" + productos[i].nombre + "(" + productos[i].id + ")";
    };
    productoSeleccionado = parseInt(prompt("Ingrese el id del producto que desea: " + mensaje));
    cantidad = parseInt(prompt("Ingrese la cantidad seleccionada de ese producto"));
    let productoEncontrado = false;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == productoSeleccionado) {
            productoEncontrado = true;
        }
    };
    if (productoEncontrado) {
        precioTotal = alert("Precio total:" + " " + realizarCalculo(productoSeleccionado, cantidad));
    } else {
        alert("Lo sentimos no hay stock de ese producto");
    }
}

function realizarCalculo(productoSeleccionado, cantidad) {
    let productoAcalcular;
    for (let i = 0; i < productos.length; i++) {
        if (productoSeleccionado == productos[i].id) {
            productoAcalcular = productos[i];
        }
    }
    return productoAcalcular.valor * cantidad;
}
calcular();