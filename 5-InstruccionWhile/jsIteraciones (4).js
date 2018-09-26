function Mostrar()
{

	var num = prompt("ingrese un número entre 1 y 9.");
	parseInt(num);

	while (num < 0 || num > 10 || isNaN(num))

		{
			num = parseInt(prompt ("ENTRE 1 y 9 TE DIJE"));

		}

		alert("Ahora seeeeh");

}//FIN DE LA FUNCIÓN