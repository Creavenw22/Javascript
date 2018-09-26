/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var x;
	var y;

	x = document.getElementById("sueldo").value;
	y = 1.10;

	x = parseInt(x);
	


    var z = x * y;


document.getElementById("resultado").value = z;

}
