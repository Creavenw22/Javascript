function Mostrar() {

	var num;
	var negat = 0;
	var posit = 0;
	var contadorP = 0;
	var contadorN = 0;
	var contadorZ = 0;
	var contadorNP = 0;
	var promP = 0;
	var promN = 0;
	var resul;

	do {
		num = parseInt(prompt("Ingrese un numero: "))

		while (isNaN(num)) {
			num = parseInt(prompt("Ingrese un NUMERO por favor: "));
		}

		if (num > 0) {
			posit = posit + num;
			contadorP++
			console.log("Contador positivos: " + contadorP);
		}

		if (num < 0) {
			negat = negat + num;
			contadorN++;
			console.log("Contador negativos: " + contadorN);
		}

		if (num == 0) {
			contadorZ++;
			console.log("Contador ceros: " + contadorZ);
		}

		if (num % 2 == 0 && num != 0) {
			contadorNP++;
			console.log("Contador pares: " + contadorNP);
		}



	} while (confirm("¿Desea continuar?"))


	var promP = posit / contadorP;
	var promN = negat / contadorN;
	var resul = posit - negat;

	console.log("Promedio posit: "+promP);
	console.log("Promedio negat: "+promN);

	if (isNaN(promP)) { promP = 0 }
	if (isNaN(promN)) { promN = 0 }



	document.write("Suma de los positivos: " + posit + "</br>" +
		"Suma de los negativos: " + negat + "</br>" +
		"La cantidad de positivos es: " + contadorP + "</br>" +
		"La cantidad de negativos es: " + contadorN + "</br>" +
		"La cantidad de ceros es: " + contadorZ + "</br>" +
		"La cantidad de numeros pares es: " + contadorNP + "</br>" +
		"El promedio de los positivos es: " + promP + "</br>" +
		"El promedio de los negativos es: " + promN + "</br>" +
		"La diferencia total de los numeros es: " + resul
	)

}//FIN DE LA FUNCIÓN