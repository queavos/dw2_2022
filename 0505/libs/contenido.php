<?php
$menu=[];
$menu[0]['codigo']=1;
$menu[0]['nombre']="GET";
$menu[0]['titulo']="GET";
$menu[0]['contenido']="Un array asociativo de variables pasado al script actual vía parámetros URL (también conocida como cadena de consulta). Tenga en cuenta que el array no solo se rellena para las solicitudes GET, sino para todas las solicitudes con una cadena de consulta.";
$menu[1]['codigo']=2;
$menu[1]['nombre']="POST";
$menu[1]['titulo']="POST";
$menu[1]['contenido']="Un array asociativo de variables pasadas al script actual a través del método POST de HTTP cuando se emplea application/x-www-form-urlencoded o multipart/form-data como Content-Type de HTTP en la petición. ";
$menu[2]['codigo']=3;
$menu[2]['nombre']="SESSION";
$menu[2]['titulo']="SESSION";
$menu[2]['contenido']="Es un array asociativo que contiene variables de sesión disponibles para el script actual. Ver la documentación de Funciones de sesión para más información sobre su uso. ";
$menu[3]['codigo']=4;
$menu[3]['nombre']="ENV";
$menu[3]['titulo']="ENV";
$menu[3]['contenido']="Una variable tipo array asociativo de variables pasadas al script actual a través del método del entorno. ";
 ?>
