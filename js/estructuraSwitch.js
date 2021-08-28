let estacion = prompt("ingrese su estacion del año preferida: 1- verano , 2- primavera, 3- otoño, 4- invierno");

switch (estacion){
    case "1" : 
        document.write("el usuario elegio la estacion verano");
        break;
    case "2" : 
        document.write("el usuario elegio la estacion primavera");
        break;
    case "3" : 
        document.write("el usuario elegio la estacion otoño");
        break;
    case "4" : 
        document.write("el usuario elegio la estacion invierno");
        break;
    default:
        document.write("el usuario selecciono una opcion erronea");        
}