<?php
$res=mostrarCiudades($link);
 ?>
 <h3>ciudades</h3>
 <table>
   <thead>
     <tr>
       <th>Id</th>
       <th>Ciudad</th>
       <th colspan="2"><a href="index.php?mod=new">Nuevo</a></th>
     </tr>
   </thead>
   <tbody>

     <?php
     while ($data=mysqli_fetch_array($res))
     {
       echo "<tr><td>".$data[0]."</td><td>".$data['ciudad']."</td><td><a href='index.php?mod=edit&id=".$data["id"]."'>editar</a></td><td><a href='index.php?mod=delete&id=".$data["id"]."'>borrar</a></td></tr>";
     }
      ?>
   <tbody>

   </tbody>
 </table>
