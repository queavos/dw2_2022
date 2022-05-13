<?php
function mostrarCiudades($link) {
  $sql="SELECT * FROM ciudades";
  $resultado = mysqli_query($link, $sql);
  if ($resultado) {
    // echo "<pre>";
     return $resultado;
      //printf("La selección devolvió %d filas.\n", mysqli_num_rows($resultado));
    }
}
function mostrarCiudad($link,$id){
  $sql="SELECT * FROM ciudades WHERE id=".$id;
  $resultado = mysqli_query($link, $sql);
  if ($resultado) {
    // echo "<pre>";
     return $resultado;
      //printf("La selección devolvió %d filas.\n", mysqli_num_rows($resultado));
    }


}
function agregarCiudad($link){}
function editarCiudad($link){}
function borrarCiudad($link){}
 ?>
