function Mostrar()
{
//tomo la edad  

 var age;

     age = document.getElementById("edad").value; 

     age = parseInt(age);

     if (age >= 13 && age <= 17 ) 

     	{ 
     		alert ("ADOLESCENTE"); 
     	}

    else 
    	{
    		alert("NO")
    	}

         
          /*Chose up or down (Up= A logica | Down: A contralogica*/

   /* if (!(age <13 || age >17))

         {
         	alert ("ADOLESCENTE")
         }
*/
}//FIN DE LA FUNCIÓN