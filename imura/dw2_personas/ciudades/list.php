<?php
$res=mostrarCiudades($link);
 ?>
 <h3>Ciudades <a href="index.php?mod=new" class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg></a><a href="<?php echo "json.php"?>" class="btn btn-outline-secondary">JSON</a></h3>

     <?php
while ($data=mysqli_fetch_array($res)){
  include 'card.vw.php';
}
?>
