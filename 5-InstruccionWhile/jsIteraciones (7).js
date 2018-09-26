function Mostrar()
{

	var count = 0;
	var acum  = 0;
	var num   = 0;
	var prom;
	var cont  = true;


		while(cont)

			{
				num = parseInt(prompt("Ingrese numero a promediar:"));

				while (isNaN(num) )
				{
					num = parseInt(prompt("LA WEA ES INVALIDA (COMO MICHETTI)"));
				}

				count = count + 1;
				acum = acum + num;

				
				cont = confirm("¿Desea continuar?");
				console.log(count + " " + num + " " + acum)

			}

			prom  = acum/count

			document.getElementById("suma").value=acum;
			document.getElementById("promedio").value=prom;


			




}//FIN DE LA FUNCIÓN