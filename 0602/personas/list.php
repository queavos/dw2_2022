<?php
$res=mostrarTodos($link);
 ?>
 <h3>Personas</h3>
 <table border=1>
   <thead>
     <tr>
       <th>CIN</th>
       <th>Apellido</th>
       <th>Nombre</th>
       <th>F. Nacimiento</th>
       <th>Email</th>
       <th>Ciudad</th>
       <th colspan="2"><a href="index.php?mod=new">Nuevo</a></th>
     </tr>
   </thead>
   <tbody>

     <?php
     while ($data=mysqli_fetch_array($res))
     {
       echo "<tr><td>".$data['cin'].
       "</td><td>".$data['apellido']."</td><td>".$data['nombre']."</td><td>".$data['fenac']."</td><td>".$data['email']."</td><td>".nombreCiudad($link,$data['ciudad_id'])."</td><td><a href='index.php?mod=edit&id=".$data["id"]."'>editar</a></td><td><a href='index.php?mod=delete&id=".$data["id"]."'>borrar</a></td></tr>";
     }
      ?>
   <tbody>

   </tbody>
 </table>
