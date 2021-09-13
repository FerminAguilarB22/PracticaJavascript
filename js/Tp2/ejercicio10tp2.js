let fila = parseInt(prompt("Ingrese un numero de filas"));
let columnas = parseInt(prompt("Ingrese un numero de columnas"));
// numeroMax es el valor maximo que va a ir en las celdas
let numeroMax = fila * columnas;

document.write("<table border>");

for (let indiceFila = 0; indiceFila < fila; indiceFila++) {
// aqui se dibujan las filas
  document.write("<tr>");
// dibujo las columnas
  for( let indiceColumna = 0; indiceColumna < columnas; indiceColumna++){
    document.write("<td>" + numeroMax);
    document.write("</td>");
    numeroMax--;  //decremento el numero dentro de la celda

  }  
  document.write("</tr>");
}

document.write("</table>");
