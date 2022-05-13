<?php
require('libs/conex.php');
require('libs/ciudades.lib.php');
$link=conectar();
$res=mostrarCiudades($link);
//$res=mostrarCiudad($link,2);

/*
while ($data=mysqli_fetch_array($res))
{
echo "<pre>";
 print_r($data);
 echo "</pre>";
echo "la ciudad ".$data[0]." es ".$data['ciudad'];
}
*/
 ?>
 <table>
   <thead>
     <tr>
       <th>Id</th>
       <th>Ciudad</th>
       <th colspan="2">Nuevo</th>
     </tr>
   </thead>
   <tbody>

     <?php
     while ($data=mysqli_fetch_array($res))
     {
       echo "<tr><td>".$data[0]."</td><td>".$data['ciudad']."</td><td>editar</td><td>borrar</td></tr>";
     }
      ?>
   <tbody>

   </tbody>
 </table>
