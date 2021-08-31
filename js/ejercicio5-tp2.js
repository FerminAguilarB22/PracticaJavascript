let dni = "";
let resto = dni % 23;
const letra = "TRWAGMYFPDXBNJZSQVHLCKE";

console.log(dni % 23);
console.log(letra.charAt(resto));
do {
  let dni = parseInt(prompt("ingrese su dni sin puntos ni comas"));
  if ((dni = "Nan")) {
    alert ("Introduzca bien su numero");
    let dni = parseInt(prompt("ingrese su dni sin puntos ni comas"));
  } else {
    document.write(
        ("Segun su DNI a usted le corresponde la letra: " + letra.charAt(resto)) + "<br>");
  }
} while (confirm("¿Desea continuar?"));
{
}
