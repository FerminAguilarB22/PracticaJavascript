let filas = parseInt(prompt("Ingrese un numero menor a 50"));
if(filas<=50){

    for(let i = filas; i>=1 ; i--){
        for(let columnas = 0; columnas<i; columnas++){
            document.write(i);
        }
        document.write("<br>");
    }
}else{
     alert("Ingrese un numero valido");
}