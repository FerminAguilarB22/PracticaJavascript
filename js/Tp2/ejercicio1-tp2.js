let edad = parseInt(prompt("ingrese su edad"));

if(edad>=18){
    document.write("Usted ya puede conducir");
}else if(edad<18){
   document.write("Usted no puede conducir");
}else{
    document.write("ingrese un numero valido");
}