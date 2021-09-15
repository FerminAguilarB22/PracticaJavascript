
let auto = {
    color : "Negro",
    marca : "BMW",
    modelo : "M3",
    estadoMotor : true
}
let arranque = confirm("Presione aceptar para encender el auto");

auto.estadoMotor = arranque;

console.log(auto);