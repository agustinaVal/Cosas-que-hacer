"use strict";

var actividades = function () {
  return {
    Cine: function Cine() {
      return resultado.innerHTML = "\n            <h5>TITANIC<h5>\n            <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/69f1EjkKF6E\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    },
    Musica: function Musica() {
      return resultado.innerHTML = "\n        <h5>Mala Rodr\xEDguez<h5>\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/NVqHQ5UMxQc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> ";
    },
    Comida: function Comida() {
      return resultado.innerHTML = "\n        <h5>Pizzas<h5>\n          <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/VFLCay52KIc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    },
    NoSeleccion: function NoSeleccion() {
      return "No haz seleccionado nada! Lo siento!";
    }
  };
}(); //Solucion Parche con select


salida.addEventListener('change', function () {
  switch (salida.value) {
    case "Cine":
      resultado.innerHTML = actividades.Cine();
      break;

    case "Musica":
      resultado.innerHTML = actividades.Musica();
      break;

    case "Comida":
      resultado.innerHTML = actividades.Comida();
      break;

    case "SinSel":
      resultado.innerHTML = actividades.NoSeleccion();
      break;
  }
}); //Soluciones 2: esta solucion constaba de pichar los botones tal como pide el desafio, 
//tengo el ejercico completo pero hay algo que no lo carga correctamente.

/*const sctividades = (() => {
    const respuesta = document.getElementById("respuesta");
    return {
        Cine: () => {
            respuesta.innerHTML = `
            <h1>TITANIC<h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/69f1EjkKF6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              `;
        },
        Musica: () => {
            respuesta.innerHTML = `
               <h1>Mala Rodríguez<h1>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/NVqHQ5UMxQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>               `;
        },
        Comida: () => {
            respuesta.innerHTML = `
            <h1>Pizzas<h1>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/VFLCay52KIc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              `;
        },
    };
})();
//Click botones que muetsran respuesta
cine.addEventListener("clic", () => {
    actividades.Cine();
});
musica.addEventListener("clic", () => {
    actividades.Musica();
});
comida.addEventListener("clic", () => {
    acctividades.Comida();
*/