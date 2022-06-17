
document.getElementById('btProcesar').onclick=guardarPersona;
window.onload=iniciarApp;
function limpiarPersonas() //limpia el contenido html de datos
{
  document.getElementById('tab_datos').innerHTML="";
  console.log("limpiando");
}
function mostrarPersonas()
  {
  console.log("cargando tabla");
    console.log("personas ->"+personas);
    if (personas!=null)
    {
    salida="<h3>Personas</h3><a id='btNuevo'data-id='-1' class='btn btn-success ' >Nuevo</a> ";
    for (var i = 0; i < personas.length; i++) {
        console.log("girando");
        salida=salida+"<div class='card'><div class='card-header'>"+personas[i].apellido+", "+personas[i].nombre+"</div><div class='card-body'><div class='row'><div class='col'><p class='card-text'><label>CI Nro.:</label>"+personas[i].cin+ "</p><p class=''><label>Fecha de Nacimiento:</label>" +personas[i].fenac+"</p><p class='card-text'><label>Localidad:</label>"+personas[i].ciudad_id+"</p></div><div class='col'><a data-id='"+personas[i].id+"'  class='btn btn-warning btn-editPersona'>Editar</a><a data-id="+personas[i].id+" ''  class='btn btn-danger btn-borrarPersona'>Borrar</a></div></div></div></div>";
        //salida=salida+"<tr><td>"+i+"</td><td>"+personas[i].cin+"</td><td>"+personas[i].apellido+"</td><td>"+personas[i].nombre+"</td><td>"+personas[i].fenac+"</td> <td><a class='btEditar btn btn-outline-warning ' data-idx='"+personas[i].id+"'>Editar</a></td> <td><a class='btBorrar btn btn-outline-danger ' data-idx='"+personas[i].id+"'>Borrar</a></td></tr>"
        //console.log(salida);
      }
      document.getElementById('datosPersonas').innerHTML=salida;
      btns=document.getElementsByClassName('btn-editPersona');
      for (var i = 0; i < btns.length; i++) {
        btns[i].onclick=editarPersona;
      }
      bbtn=document.getElementsByClassName('btn-borrarPersona');
      for (var i = 0; i < bbtn.length; i++) {
        bbtn[i].onclick=borrarPersona;
      }
      document.getElementById('btNuevo').onclick=editarPersona;
      showListPersonas();
    }
  }

  function nuevoPersona ()
  {
    limpiarForm();
    document.getElementById('cin').focus();
  }

///
function limpiarForm()
{
  document.getElementById('idx').value="-1";
  document.getElementById('cin').value="";
  document.getElementById('apellido').value="";
  document.getElementById('nombre').value="";
  document.getElementById('fenac').value="";
}

//editarForm
function editarPersona(e)
{
  //console.log(e);
  let idxe=getPersonasById(e.target.attributes["data-id"].value);
  console.log(idxe);
  if (idxe>=0) {
    document.getElementById('id').value=personas[idxe].id;
    document.getElementById('cin').value=personas[idxe].cin;
    document.getElementById('apellido').value=personas[idxe].apellido;
    document.getElementById('nombre').value=personas[idxe].nombre;
    document.getElementById('fenac').value=personas[idxe].fenac;

  } else {
    document.getElementById('id').value="-1";
    document.getElementById('cin').value="";
    document.getElementById('apellido').value="";
    document.getElementById('nombre').value="";
    document.getElementById('fenac').value="";
  }


  document.getElementById('cin').focus();
  //iniciarApp();
  showFormPersonas();
}
