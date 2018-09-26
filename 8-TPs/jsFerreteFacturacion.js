/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var P1 = parseInt(document.getElementById("PrecioUno").value)
    var P2 = parseInt(document.getElementById("PrecioDos").value)
    var P3 = parseInt(document.getElementById("PrecioTres").value)

    var suma = P1+P2+P3

    alert ("La suma de los tres precios es " + suma)
}
function Promedio () 
{
	var P1 = parseInt(document.getElementById("PrecioUno").value)
    var P2 = parseInt(document.getElementById("PrecioDos").value)
    var P3 = parseInt(document.getElementById("PrecioTres").value)

    var promedio = (P1+P2+P3)/3

    alert ("El promedio de los tres precios es " + promedio)
}
function PrecioFinal () 
{
	var P1 = parseInt(document.getElementById("PrecioUno").value)
    var P2 = parseInt(document.getElementById("PrecioDos").value)
    var P3 = parseInt(document.getElementById("PrecioTres").value)

    var PF= (P1+P2+P3)*1.21

    alert ("El precio final de los tres precios es " + PF)
}