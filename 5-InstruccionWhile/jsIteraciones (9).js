function Mostrar() {

	var num = 0;
	var max;
	var min;
	flag = true;

	do {
		num = parseInt(prompt("Ingrese un numero:"))
		while (isNaN(num)) {
			num = parseInt(promp("Un numero te dije:"))
		}

		if (flag) {
			max = min = num;
		}

		if (num > max) {
			max = num;
		}

		else if (num < min){
			min = num;
		}
		flag = false;
	} while (confirm("¿Desea continuar?"));


	document.getElementById("minimo").value = min;
	document.getElementById("maximo").value = max;

}//FIN DE LA FUNCIÓN