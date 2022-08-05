let fotos;
fetch("../assets/photos.json").then((respuesta) => respuesta.json()).then((fotosRespuesta) => {
    fotos = fotosRespuesta;
    console.log(fotos);
});
