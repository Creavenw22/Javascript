function Mostrar()
{

	var acump = 0;
	var acumn = 1;
	var num;
	var flag = true;


		do

			{
				num = parseInt(prompt("Ingrese numero:"));

				while (isNaN(num) )
				
				{
					num = parseInt(prompt("Por favor, intruduzca un NUMERO:"));
				}

					if ( num >= 0 )

						{
							acump = num + acump;
						}

					else 
						{
							acumn = num * acumn;

							flag = false;
						}	
			
				
				
				

			}	while(confirm("¿Desea continuar?"))


				if ( flag )

					{
						acumn = 0 
					}


			document.getElementById("suma").value=acump;
			document.getElementById("producto").value=acumn;

}//FIN DE LA FUNCIÓN