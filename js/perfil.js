const botonAgregar = document.querySelector(".agregar");
const contenedorModal = document.querySelector("#modal-tablero");

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
     const coleccionDuplicada = coleccionesGuardadas.find((tablero) => tablero.nombre == inputTextoTablero.value);
     if (!coleccionDuplicada) {
         coleccionesGuardadas.push({
            nombre: inputTextoTablero.value,
            pines: []
         });
     }
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
        numPines.innerText = `${tablero.pines.length} Pines`;

        divTablero.appendChild(numPines);
        pinsContainer.appendChild(divTablero);
    });
}
mostrarTableros();