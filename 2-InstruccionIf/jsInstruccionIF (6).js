function Mostrar()
{
//tomo la edad  
   var age;

   age = parseInt(document.getElementById("edad").value);

   if ( age < 13 )

   	{
   		alert("Es un niño, degenerado.")
    }

   else 
   
   {
   	if ( age >= 18 )
   	    {
  	    alert("Es un adulto")
   	    }

   	else
   		{ 
   			alert("Es un adolescente")
        }
   } 




}//FIN DE LA FUNCIÓN