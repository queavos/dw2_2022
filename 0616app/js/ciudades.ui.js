var cancelar=document.getElementById("cancelFormCiudad");
cancelar.onclick=showListCiudades;
var sendCiudad=document.getElementById("sendFormCiudad");
sendCiudad.onclick=saveCiudades;
function mostrarCiudades()
    {
        console.log("listando ciudades");

        if (ciudades!=null)
        {
        salida="";
        for (var i = 0; i < ciudades.length; i++) {
           // console.log("girando");
            salida=salida+"<div class='card'><div class='card-header'>"+ciudades[i].id+"</div><div class='card-body'><div class='row'><div class='col'><p class='card-text'><label>Nombre:</label>"+ciudades[i].ciudad+"</p></div><div class='col'><a data-id='"+ciudades[i].id+"' class='btn btn-warning btn-editcid'>Editar</a><a data-id='"+ciudades[i].id+"' class='btn btn-danger btn-delcid'>Borrar</a></div></div></div></div>"; 
          }
          document.getElementById('datosCiudades').innerHTML=salida;
          btns=document.getElementsByClassName('btn-editcid');
          for (var i = 0; i < btns.length; i++) {
            btns[i].onclick=editarCiudades;
          }
          bbtn=document.getElementsByClassName('btn-delcid');
          for (var i = 0; i < bbtn.length; i++) {
            bbtn[i].onclick=deleteCiudades;
        }
        showListCiudades();
    }
    }
function editarCiudades(e) 
{
  console.log("editar ciudades"); 
  hideListCiudades(); 
  let idxe=e.target.attributes["data-id"].value;
  idx=getCiudadById(idxe);
  ///console.log(ciudades);
  if (idx>=0)
  {   
  document.getElementById('idx').value=ciudades[idx].id;
  document.getElementById('ciudad').value=ciudades[idx].ciudad;
  }
  else
  {   
    document.getElementById('idx').value=-1;
    document.getElementById('ciudad').value="";
 }
  document.getElementById('ciudad').focus();

}    
function showFormCiudades(){
    console.log("showFormCiudades");
    $('#datosCiudades').hide()
    $('#formCiudades').show()
}
function hideFormCiudades(){
    console.log("hideFormCiudades");
    $('#datosCiudades').show()
    $('#formCiudades').hide()
}
function showListCiudades(){
    console.log("showListCiudades");
    $('#formCiudades').hide()
    $('#datosCiudades').show()
}
function hideListCiudades(){
    console.log("hideListCiudades");
    $('#datosCiudades').hide()
    $('#formCiudades').show()
}
