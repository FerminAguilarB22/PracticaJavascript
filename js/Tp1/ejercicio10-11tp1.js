let numero = parseInt(prompt("ingrese un numero para ver si es divisible por 2, 3 ,5 o 7"));
let div2 = (numero % 2);
let div3 = (numero % 3);
let div5 = (numero % 5);
let div7 = (numero % 7);

if(div2 == 0){
    document.write("El numero ingresado es divisible en 2");
}else if(div3 == 0){
    document.write("El numero ingresado es divisible en 3");
}else if (div5 == 0){
    document.write("El numero ingresado es divisible en 5");
}else if (div7 == 0){
    document.write("El numero ingresado es divisible en 7");
}else{
    document.write("El numero ingresado no es divisible por ninguno de los numeros");
}
