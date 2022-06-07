<div class="card">
  <div class="card-header">
    <?php echo $data['apellido'].", ".$data['nombre']; ?>
  </div>
  <div class="card-body">
    <div class="row">
    <div class="col">
      <p class="card-text">CI Nro.:<?php echo $data['cin']; ?> </p>
      <p class="">Edad:<a class="btn btn-primary"> <span class="badge badge-pill badge-success"> <?php echo edadPersona($data['fenac']); ?></span></a></p>
      <p class="card-text">Localidad:<?php echo nombreCiudad($link,$data['ciudad_id']); ?> </p>
    </div>
    <div class="col">
      <a href="<?php echo "index.php?mod=edit&id=".$data["id"]; ?>" class="btn btn-warning">Editar</a>
      <a href="<?php echo "index.php?mod=delecte&id=".$data["id"]; ?>" class="btn btn-danger">Borrar</a>
    </div>
    </div>
  </div>
</div>
