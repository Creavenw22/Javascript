function Mostrar()
{
//tomo la edad  
 var age;

     age = document.getElementById("edad").value; 

     age = parseInt(age);

     if ( age >= 18 )

     	{ 
     		alert ("MAYOR DE EDAD"); 
     	}

     else 
     	{ 
     		alert ("MENOR DE EDAD"); 
     	} 

}//FIN DE LA FUNCIÓN