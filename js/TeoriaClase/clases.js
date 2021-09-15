// crear una clase
class Serie{
  // con este metodo se crean los objetos
  constructor(nombre, temporadas, capitulos, genero) {
    //crear las propiedades del objeto
    this.nombre = nombre;
    this.temporadas = temporadas;
    this.capitulos = capitulos;
    this.genero = genero;
    this.publicado = false; //propiedad por defecto
  }
  //aqui van nuestros metodos
  mostrarDatos() {
    document.write("Serie: " + this.nombre + "Temporadas: " + this.temporadas + "<br>");
  }

  mostrarDatosCompletos(){
      //mostrar todas las propiedades del objeto "" o ``
      
  }
}

//Utilizar la clase o crear o instanciar objetos

let theOffice = new Serie("The Office",9,27,"sitcom");

console.log(theOffice);

theOffice.mostrarDatos();
