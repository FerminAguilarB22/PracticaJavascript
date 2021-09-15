let mostrarObjeto = (serieParametro) =>{
    // obtener todas las claves de un objeto, como si fuera un arreglo
    let claves = Object.keys(serieParametro);
    console.log(claves);//["nobre", "temporadas",...]
    for(let i = 0 ; i < claves.length; i++){
        document.write(`<br> ${claves[i]}: ${serieParametro[claves[i]]}`)
    }

} 

// let nombre = "The office";
// let temporadas = 9;
// let genero = "sitcom";
// let capitulos = 27;

// Crear un objeto con notacion literal

let serie = {
    nombre : "The office",
    temporadas: 9,
    genero: "sitcom",
    capitulos: 27
}

// mostrar una propiedad de un objeto
document.write(`series: ${serie.nombre}`);
document.write(`<br> capitulos: ${serie.capitulos}`);
console.log(serie);

// mostrar una propiedad de un objeto metodo 2

document.write(`<br> Temporadas: ${serie["temporadas"]}`);

// modificar una propiedad de un objeto
serie.temporadas = 10;
console.log(serie.temporadas);

// agregar una nueva propiedad a un objeto
serie.premios = true;
console.log(serie.premios);

// borrar una propiedad de un objeto
delete serie.genero;
console.log(serie);

mostrarObjeto(serie);



