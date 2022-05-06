<?php
//echo "cosas";
$cosas="algunas cosas";
$otra=23;
//echo $otra." - ".$cosas."\n";
if ($otra>0) {
  //echo "<br> es mayor que cero";
} else {
  echo "es menor que cero";
}
for ($i=0; $i < 5 ; $i++) {
//echo $i."<br>";
}
function pagina1()
{
  echo "<h3>GET</h3>";
  echo "Un array asociativo de variables pasado al script actual vía parámetros URL (también conocida como cadena de consulta). Tenga en cuenta que el array no solo se rellena para las solicitudes GET, sino para todas las solicitudes con una cadena de consulta.";
}
function pagina2()
{
  echo "<h3>POST</h3>";
  echo "Un array asociativo de variables pasadas al script actual a través del método POST de HTTP cuando se emplea application/x-www-form-urlencoded o multipart/form-data como Content-Type de HTTP en la petición. ";
}
function pagina3()
{
  echo "<h3>SESSION</h3>";
  echo "Es un array asociativo que contiene variables de sesión disponibles para el script actual. Ver la documentación de Funciones de sesión para más información sobre su uso. ";
}


function menu($menu)
{
  for ($i=0; $i<count($menu);$i++ )
  {
    echo "<li><a href='index.php?p=".$menu[$i]['codigo']."'>".$menu[$i]["nombre"]."</a></li>";
  }
}
 ?>
