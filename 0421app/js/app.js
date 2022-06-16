personas=[]; // declara el array
rutaJSON="http://127.0.0.1/dw2_2022/0602cards/"
document.getElementById('btNuevo').onclick=nuevoRegistro;
document.getElementById('btCargar').onclick=cargarTabla;
document.getElementById('btLimpiar').onclick=limpiarTabla; // asigno la funcion limpiarTabla al evento click del boton
document.getElementById('btProcesar').onclick=procesarForm;
//const axios = require('axios').default;
window.onload=iniciarApp;
function iniciarApp()
{
  limpiarTabla();
  cargarDatos();
  cargarTabla();
}

function cargarDatos() // carga datos de prueba al array Persona
{
console.log("cargando datos...");
url=rutaJSON+"personas/json.php";
$.getJSON(url, function(data, status){
  localStorage.setItem('personas',JSON.stringify(data));
  personas=JSON.parse(localStorage.getItem('personas'));
  limpiarTabla();
  cargarTabla();
});

if (personas==null)
{
  personas=[];
}
}

//console.log(personas);
//iniciarApp();
function limpiarTabla() //limpia el contenido html de datos
{
//  var salida=document.getElementById('tab_datos').innerHTML;
  document.getElementById('tab_datos').innerHTML="";
  console.log("limpiando");
}
function cargarTabla()
  {
  console.log("cargando tabla");
    console.log("personas ->"+personas);
    if (personas!=null)
    {
    salida="";
    for (var i = 0; i < personas.length; i++) {
        console.log("girando");
        salida=salida+"<tr><td>"+personas[i].id+"</td><td>"+personas[i].cin+"</td><td>"+personas[i].apellido+"</td><td>"+personas[i].nombre+"</td><td>"+personas[i].fenac+"</td> <td><a class='btEditar btn btn-outline-warning ' data-idx='"+i+"'>Editar</a></td> <td><a class='btBorrar btn btn-outline-danger ' data-idx='"+i+"'>Borrar</a></td></tr>"
        //console.log(salida);
      }
      document.getElementById('tab_datos').innerHTML=salida;
      btns=document.getElementsByClassName('btEditar');
      for (var i = 0; i < btns.length; i++) {
        btns[i].onclick=editarForm;
      }
      bbtn=document.getElementsByClassName('btBorrar');
      for (var i = 0; i < bbtn.length; i++) {
        bbtn[i].onclick=borrarRegistro;
      }
    }
  }

  function nuevoRegistro ()
  {
    limpiarForm();
    document.getElementById('cin').focus();
  }
  function borrarRegistro(e)
  {
    console.log(e.target);
    let idxe=e.target.attributes["data-idx"].value;
    /*
    personas.splice(idxe,1);
    persistirRegistros();
*/
let id=personas[idxe].id;
url=rutaJSON+"personas/api.php?mod=delete&id="+id;
  $.get(url,function(data, status){
  //alert("Data: " + data + "\nStatus: " + status);
  limpiarForm();
  limpiarTabla();
  iniciarApp()
  });
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
function editarForm(e)
{
  console.log(e.target);
  let idxe=e.target.attributes["data-idx"].value;
  //console.log(idxe);
  document.getElementById('idx').value=personas[idxe].id;
  document.getElementById('cin').value=personas[idxe].cin;
  document.getElementById('apellido').value=personas[idxe].apellido;
  document.getElementById('nombre').value=personas[idxe].nombre;
  //document.getElementById('fenac').value=new Date(personas[idxe].fenac);
  document.getElementById('fenac').value=personas[idxe].fenac;
//document.getElementById('fenac').value='30/07/1234'
//console.log(personas[idxe].fenac);
//console.log(document.getElementById('fenac'));
  document.getElementById('cin').focus();
}
/// procesar formulario
function procesarForm()
{

  /*
  let idx=document.getElementById('idx').value;
  if (idx==-1)
    {
      // if (personas!=null)
      // {
      //   personas=new Array();
      //   console.log("PERSONAS ES NULL");
      // }
    let p={
        "id":document.getElementById('idx').value,
        "nombre": document.getElementById('nombre').value,
        "apellido":document.getElementById('apellido').value,
        "cin":document.getElementById('cin').value,
        "fenac":document.getElementById('fenac').value }
console.log(personas);
    personas.push(p);
    }
    else {
      personas[idx].cin=document.getElementById('cin').value;
      personas[idx].nombre=document.getElementById('nombre').value;
      personas[idx].apellido=document.getElementById('apellido').value;
      personas[idx].fenac=document.getElementById('fenac').value;
    }
    //persistirRegistros();
    */
    let p={
      "id":document.getElementById('idx').value,
      "nombre": document.getElementById('nombre').value,
      "apellido":document.getElementById('apellido').value,
      "cin":document.getElementById('cin').value,
      "fenac":document.getElementById('fenac').value }
    //
    console.log(p);
    url=rutaJSON+"personas/api.php";
    $.post(url,p,
    function(data, status){
      //alert("Data: " + data + "\nStatus: " + status);
      limpiarForm();
      limpiarTabla();
      iniciarApp()
    });

    //


}
function persistirRegistros()
{
  localStorage.setItem('personas',JSON.stringify(personas));
}




//  cargarDatos();
function pruebas()
   {
     console.log("probando");
     var botones=document.getElementsByClassName('btn');
     //console.log(botones);
     for (var i = 0; i < botones.length; i++) {
       botones[i].classList.add("btn-outline-info");
     }


   }
