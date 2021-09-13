let resultado = ("");
do {
    let palabra = prompt ("Ingrese una palabra");    
    resultado = resultado +  palabra + " - "
    console.log(resultado);
}while(confirm("¿Desea continuar?")){

}
document.write(resultado);