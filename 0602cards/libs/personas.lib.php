<?php
function mostrarTodos($link) {
  $sql="SELECT * FROM personas order by id ";
  $resultado = mysqli_query($link, $sql);
  if ($resultado) {
    // echo "<pre>";
     return $resultado;
      //printf("La selección devolvió %d filas.\n", mysqli_num_rows($resultado));
    }
}
function mostrarPorId($link,$id){
  $sql="SELECT * FROM personas WHERE id=".$id;
  $resultado = mysqli_query($link, $sql);
  if ($resultado) {
    // echo "<pre>";
     return $resultado;
      //printf("La selección devolvió %d filas.\n", mysqli_num_rows($resultado));
    }


}
function agregarPersona($link,$datos){
  //print_r($datos);
  $sql='INSERT INTO ciudades(ciudad) values ("'.$datos['ciudad'] .'") ';
  $resultado = mysqli_query($link, $sql);
  if ($resultado) { return 1; } else { return 0; }

}
function editarPersona($link,$datos){
$sql='update ciudades set ciudad="'.$datos['ciudad'].'" where id='.$datos['id'];
$resultado = mysqli_query($link, $sql);
if ($resultado) { return 1; } else { return 0; }
}
function borrarPersona($link,$datos ){
  $sql="delete from ciudades where id=".$datos['id'];
  $resultado = mysqli_query($link, $sql);
  if ($resultado) { return 1; } else { return 0; }
}
function edadPersona($fenac)
{
$date1 = new DateTime($fenac);
$date2 = new DateTime();
$diff = $date1->diff($date2);
return $diff->y;
}
 ?>
