// funcion, calculo de IVA

alert ("Se mostrara el precio del producto mas IVA");
function iva () {
let costo = parseFloat(prompt("Por favor indique el precio de costo del producto a vender")); 
let sumar = costo * 0.21;
let resultado = costo + sumar;
alert("El precio final mas IVA es de " + resultado);

}

iva ();




   