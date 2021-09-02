let anime = "Dragon ball";
// crear o inicializar un arreglo []
let series = ["Dragon ball", "Naruto", "Evangelion 3.0+1", anime, 15, true];
// crear un arreglo vacio
let temporadas = [];
// document.write("serie: " + series[1]);
// agrego un elemento al final del arreglo
series.push("Loki");
console.log(series[6]);
//  saber cuantos elementos tiene mi arreglo uso length
console.log(series.length);
// let serieUsuario = prompt("ingrese una serie");
// series.push=(serieUsuario);
series.push(prompt("ingrese una serie"));
console.log(series.length);
//Mostrar todos los elementos de un arreglo
for (let posicion = 0; posicion < series.length; posicion++) {
  document.write("<br>" + posicion + " Serie: " + series[posicion]);
}
// modificar un elemento del arreglo
series[4] = "the office";
mostrarSeries();
// agrego un elemento al arreglo en la posicion que quiero
series.splice(0, 0, "One piece");
mostrarSeries();
// agrego otro elemento
series.splice(3, 0, "Sword art online");
mostrarSeries();
// eliminar elemento de un arreglo
series.splice(7, 1);
mostrarSeries();
// eliminar todos los elementos a partir de la posicion deseada
series.splice(3); //borro desde la posicion 3 en adelante
mostrarSeries();
// crear funcion que muestre los elementos del arreglos
function mostrarSeries() {
  document.write("<br>");
  for (let posicion = 0; posicion < series.length; posicion++) {
    document.write("<br>" + posicion + " Serie: " + series[posicion]);
  }
}
