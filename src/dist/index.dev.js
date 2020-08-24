"use strict";

var actividades = function () {
  return {
    Cine: function Cine() {
      return resultado.innerHTML = "\n            <div class=\"container\">\n            <h5 class=\"text-info\">TITANIC<h5>\n            <iframe width=\"560\" height=\"315\"  src=\"https://www.youtube.com/embed/69f1EjkKF6E\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n            <a href=\"https://es.wikipedia.org/wiki/Titanic_(pel%C3%ADcula_de_1997)\" class=\"text-info\">Pincha aqu\xED para ver m\xE1s... </a> </br>\n            <hr>\n            </div> ";
    },
    Musica: function Musica() {
      return resultado.innerHTML = "\n            <div class=\"container\">\n            <h5 class=\"text-info\">Mala Rodr\xEDguez<h5>\n            <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/NVqHQ5UMxQc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n            <a href=\"https://es.wikipedia.org/wiki/Mala_Rodr%C3%ADguez\" class=\"text-info\">Pincha aqu\xED para ver m\xE1s... </a> </br>\n            <hr>\n            </div> ";
    },
    Comida: function Comida() {
      return resultado.innerHTML = "\n            <div class=\"container\">\n            <h5 class=\"text-info\">Pizzas<h5>\n            <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/VFLCay52KIc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n            <a href=\"https://es.wikipedia.org/wiki/Pizza\" class=\"text-info\">Pincha aqu\xED para ver m\xE1s... </a> </br>\n            <hr>\n            </div> ";
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
}); //Soluciones 2: esta solucion constaba de pichar los botones tal como pide el desafio,tengo el ejercico completo pero hay algo que no lo carga correctamente.

/*const actividades = (() => {
    const resultado = document.getElementById("resultado");
    return {
        Cine: () => {
            resultado.innerHTML = `
            <h1>TITANIC<h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/69f1EjkKF6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              `;
        },
        Musica: () => {
            resultado.innerHTML = `
               <h1>Mala Rodríguez<h1>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/NVqHQ5UMxQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>               `;
        },
        Comida: () => {
            resultado.innerHTML = `
            <h1>Pizzas<h1>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/VFLCay52KIc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              `;
        },
    };
})();
//Click botones que muestran respuesta
cine.addEventListener("clic", () => {
    actividades.Cine();
});
musica.addEventListener("clic", () => {
    actividades.Musica();
});
comida.addEventListener("clic", () => {
    acctividades.Comida();
*/