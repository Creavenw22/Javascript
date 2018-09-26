var numeroUno;
var numeroDos;
var resultado;

function sumar()        /* ESTA ES LA FORMA CORRECTA*/
{
	numeroUno = parseInt(document.getElementById("numeroUno").value);
	numeroDos = parseInt(document.getElementById("numeroDos").value);
  	resultado = numeroUno + numeroDos;
   	alert("El resultado es " + resultado); 
}

function restar()
{
	numeroUno = parseInt(document.getElementById("numeroUno").value);
	numeroDos = parseInt(document.getElementById("numeroDos").value);
	resultado = numeroUno - numeroDos;
	alert("El resultado es " + resultado);
}

function multiplicar()
{ 
	numeroUno = parseInt(document.getElementById("numeroUno").value);
	numeroDos = parseInt(document.getElementById("numeroDos").value);
	resultado = numeroUno * numeroDos
	alert("El resultado es " + resultado);
}

function dividir()
{
	numeroUno = parseInt(document.getElementById("numeroUno").value);
	numeroDos = parseInt(document.getElementById("numeroDos").value);
	resultado = numeroUno / numeroDos
	alert("El resultado es " + resultado);
}