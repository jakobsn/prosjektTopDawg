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
var looper;
var degrees = 0;
function morro(){
  var elem = document.getElementById("morroknappdiv");
  if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
  if(degrees > 359){
		degrees = 0;
	}
  else{
    looper = setTimeout(morro,1);
  }
  degrees++;
  degrees++;
}
scl = 1;
function bonus(){
  var elem = document.getElementById("bonusknappdiv");
  if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "scale("+scl+")";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "scale("+scl+")";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "scale("+scl+")";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "scale("+scl+")";
	} else {
		elem.style.transform = "scale("+scl+")";
	}
  if(scl > 100){
		scl = 1;
    linkDiv('bonus.html')
	}
  else{
    looper = setTimeout(bonus,1);
  }
  scl = scl + 0.2;
}
