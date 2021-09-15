let ciudades = [];

do{
    let ciudadUsuario = prompt("ingrese una ciudad");
    ciudades.push(ciudadUsuario);
}
while(confirm("Desea continuar?")){
    
}
document.write("Sus ciudades fueron:<br>");
for (let posicion = 0; posicion < ciudades.length; posicion++) {
    document.write("<br>"+ (posicion+1) +"-" + ciudades[posicion]);
  }
document.write("<br>Usted ingreso " + ciudades.length + " ciudades");

document.write("<br>Su primera ciudad fue :"+ ciudades[0]);
document.write("<br>Su tercera ciudad fue :"+ ciudades[2]);

let ultimaCiudad = (ciudades.length - 1);

document.write("<br>Su ultima ciudad fue :"+ ciudades[ultimaCiudad]);
ciudades.push("Paris");

document.write("<br>Ahora la ciudad de "+ ciudades[1] + " ocupa la segunda posicion");

ciudades[1] = "Barcelona";

for (let posicion = 0; posicion < ciudades.length; posicion++) {
    document.write("<br>"+ (posicion+1) +"-" + ciudades[posicion]);
  }

