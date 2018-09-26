function Mostrar()
{

		var count;
		var acum;
		var num;
		var prom;

		acum = 0
		count = 0;
	

			while ( count < 5 )

				{
					num = parseInt(prompt("Ingrese otro nuimero a promediar"));
				
							while (isNaN(num))

						{
							num = parseInt(prompt("Incorrecto. Reingrese:"))

						}

					count = count+1;
					acum = num + acum;
					console.log(count);
					console.log(num);
					console.log(acum);
				}

			

				prom = acum / 5;

				document.getElementById("suma").value = acum;
				document.getElementById("promedio").value = prom;

}//FIN DE LA FUNCIÓN