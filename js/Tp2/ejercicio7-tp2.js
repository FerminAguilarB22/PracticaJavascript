let filas = parseInt(prompt("Ingrese un numero menor a 50"));
if(filas<=50){

    for(let i = 1; i<=filas ; i++){
        for(let columnas = 1; columnas<=i; columnas++){
            document.write(columnas);
        }
        document.write("<br>");
    }
}else{
     alert("Ingrese un numero valido");
}