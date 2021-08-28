// ejercicio 6
// let numero1 = parseInt (prompt("ingrese un primer numero"));
// let numero2 = parseInt(prompt("ingrese un segundo numero"))

/*
if( numero1 > numero2){
    document.write("La variable numero1 es mayor " + numero1);
}else if(numero2 > numero1){
        document.write("La variable numero2 es mayor " + numero2);
    }else{
        document.write("Los numeros son iguales " + numero1);
    
}
*/

// ejercicio 7
// let numero3 = parseInt(prompt("ingrese un tercer numero"));

/*if(numero1 > numero2 && numero1 > numero3){
    document.write("El numero1 es el mayor " + numero1);
}
else if (numero2 > numero3){
    document.write("El numero2 es el mayor " + numero2);
}
else if (numero3 > numero1 && numero3 > numero2){
    document.write("el numero3 es el mayor " + numero3);
}
else{
    document.write("los numeros son iguales");
}*/

// ejercicio 8
/*
let numero = parseInt(prompt("ingrese un numero para ver si es divisible en 2"));
let resultado = (numero % 2);
console.log(resultado);
if (resultado == 0 ){
    document.write("El numero " + numero + " es divisible en 2");
}else{
    document.write("El numero " + numero + " no es divisible en 2");
}*/

//ejercicio 9
let frase = prompt("Ingrese una frase");
console.log(frase.toLowerCase());
frase = frase.toLowerCase();
// hola mundo
console.log(frase.length);
// tomar un caracter variable.chartAt(indice)
for (let vocal = 0; vocal < frase.length; vocal++) {
  console.log(frase.charAt(vocal));
  if (
    frase.charAt(vocal) == "a" ||
    frase.charAt(vocal) == "e" ||
    frase.charAt(vocal) == "i" ||
    frase.charAt(vocal) == "o" ||
    frase.charAt(vocal) == "u"
  ){
     document.write((" ") + frase.charAt(vocal));
  }
}
