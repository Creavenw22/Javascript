/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var x;
	var y;
	var z;

	x = document.getElementById("importe").value;
    y = 0.75;

    x = parseInt(x);

    z = x * y;

    document.getElementById("resultado").value = z;

}
