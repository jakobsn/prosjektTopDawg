function linkDiv(link){
  window.location.href = link;
}
var droppedDown = false;

function showMenu(){
  if (droppedDown){
    document.getElementById("dropdown-menu").style.display="none";
    droppedDown = false;
  }
  else{
    document.getElementById("dropdown-menu").style.display="block";
    document.getElementById("dropdown-menu").style.margin=0;
    document.getElementById("dropdown-menu").style.padding=0;
    droppedDown = true;
  }
}

function fram(){

}
function tilbake(){
  var source = document.getElementById("foto").src;
  
}
function change(link){
  document.getElementById("foto").src=link
}