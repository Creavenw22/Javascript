function Mostrar()
{
//tomo la edad  
 var age;

 age = parseInt(document.getElementById("edad").value);


     if ( age < 13 || age > 17 )
     {
     	alert ("No es adolescente!");
     }

}//FIN DE LA FUNCIÓN