function Mostrar()
{
//tomo la edad  
   var age; 
   var CS;

   age = document.getElementById("edad").value;
   CS  = document.getElementById("estadoCivil").value;

   age = parseInt(age);


         if ( age < 18 && CS == "Casado" )
         {
             alert("Es muy joven para NO estar soltero.");
         }

         else if ( age < 18 && CS == "Divorciado" )
         {
         	alert("Es muy joven para NO estar soltero.");
         }

	


}//FIN DE LA FUNCIÓN