// Funcion sin parametros
function aumentarPrecio(){
    console.log("prueba")
    let disney= 385;
    let inflacion= 150;
    document.write("Valor total del servicio disney plus $" + (disney + inflacion));
}
// funcion con parametros
function actualizarPrecio(monto, producto, precio){
    let calculo = precio + monto;
    document.write("<br> El producto: " + producto+ " tiene el precio total $"+ calculo);
}

// invocar o llamar a una funcion
aumentarPrecio();

let coeficienteInflacion = parseInt(prompt("Ingrese el monto total de la inflacion del mes"));

actualizarPrecio(coeficienteInflacion, "Teclado Hyperx", 9000);


// funciones que devuelven un valor
// function conversorAPesos(PrecioDolar){
//     let total = PrecioDolar * 184;
//     return total;
//     // Jamas escrbimos codigo debajo de un return
// }

// funciones en forma de flecha =>
let conversorAPesos = (PrecioDolar) => {
    let total = PrecioDolar * 184;
    return total;
}

let iphone = conversorAPesos(1200);

document.write(`<br> Producto Iphone - precio $ ${iphone} (producto nuevo) `);
document.write(`<br> Producto PS5 - precio $ ${conversorAPesos(500)} (ultima version) `);
