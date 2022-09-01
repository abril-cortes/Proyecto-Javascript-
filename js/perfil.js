const botonAgregar = document.querySelector(".agregar");
const contenedorModal = document.querySelector("#modal-tablero");

// NOTIFICACION CON LIBRERIA
const toastSwal = (mensaje, icono, bgcolor)=> {
    Swal.fire({
    toast: true,
    position: 'top-end',
    text: mensaje,
    icon: icono,
    iconColor: 'black',
    showConfirmButton: false,
    timer: 3000,
    background: bgcolor,
    color: 'black'
  });
}

// MOSTRAR MODAL
botonAgregar.addEventListener("click", ()=>{
    contenedorModal.classList.add("mostrar");
});

// CERRAR MODAL
const botonCerrar = document.getElementById("cerrar");
botonCerrar.addEventListener("click", () => {
    contenedorModal.classList.remove("mostrar");
});

let coleccionesGuardadas = JSON.parse(localStorage.getItem("colecciones"));

// FUNCION CREAR TABLERO 
const botonCrear = document.querySelector(".crear");

botonCrear.addEventListener("click", () => {
    const inputTextoTablero = document.querySelector("#input-texto-tablero");
    if (!coleccionesGuardadas) {
        localStorage.setItem("colecciones", JSON.stringify([]));
        coleccionesGuardadas = JSON.parse(localStorage.getItem("colecciones"));
    }

    // Guardamos en coleccion duplicada si hay algun tablero con el mismo nombre
    const coleccionDuplicada = coleccionesGuardadas.find((tablero) => tablero.nombre == inputTextoTablero.value);

    // Validamos si se intenta guardar un tablero sin nombre y despues si coleccion duplicada es verdadera se avisa que ya existe, si es falso guarda el tablero
    const tableroVacio = (inputTextoTablero.value == "")
         ? toastSwal("Ingresa el nombre del tablero a crear.", 'warning', 'white')
         : (!coleccionDuplicada) 
            ? coleccionesGuardadas.push({
            nombre: inputTextoTablero.value,
            pines: []})
            : toastSwal("Ese tablero ya existe.", 'warning', 'white');

    // if (!coleccionDuplicada) {
    //     coleccionesGuardadas.push({
    //         nombre: inputTextoTablero.value,
    //         pines: []
    //      });
    // }
    localStorage.setItem("colecciones", JSON.stringify(coleccionesGuardadas));
    contenedorModal.classList.remove("mostrar");
    inputTextoTablero.value = "";
    mostrarTableros();
})

// FUNCION TABLEROS EN HTML
 
function mostrarTableros() {
   const tableros = JSON.parse(localStorage.getItem("colecciones"));
    const pinsContainer = document.getElementById("pins-container");
    pinsContainer.innerText = "";
    tableros.forEach(tablero => {
        const divTablero = document.createElement("div");
        divTablero.innerText = tablero.nombre;
        divTablero.className = "div-tablero";
        const numPines = document.createElement("p");
        numPines.className = "numero-pines";
        numPines.innerText = `${tablero.pines?.length} Pines`;

        divTablero.appendChild(numPines);
        pinsContainer.appendChild(divTablero);
    });
}
mostrarTableros();

