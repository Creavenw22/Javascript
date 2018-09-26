function Mostrar()
{
//tomo la edad  

	var age;
	var CS;

	age = document.getElementById("edad").value;
	CS  = document.getElementById("estadoCivil").value;

	age = parseInt(age)

	if (age >= 18 && CS == "Soltero")

	{
	 alert("Es mayor y es soltero.");	
	}


}//FIN DE LA FUNCIÓN