//To add a 'hotspot', give the element name="mouseArea"

var tracking = false;

var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");

var buttons = document.getElementsByName("btnToggle");
var mouseAreas = document.getElementsByName("mouseArea");


function toggle(){
  if(tracking){
    for(var i=0; i < buttons.length; i++){
      buttons[i].classList.remove("btn-danger");
      buttons[i].classList.add("btn-success");
      buttons[i].innerText = "Start mouse tracking.";

      mouseX.innerText = "Untracked";
      mouseY.innerText = "Untracked";
    }


  }else{
    for(var i=0; i < buttons.length; i++){
      buttons[i].classList.remove("btn-success");
      buttons[i].classList.add("btn-danger");
      buttons[i].innerText = "Stop mouse tracking.";
    }
  }

  tracking = !tracking;
}


function updateMousePosition(evt){
  if(tracking){
    mouseX.innerText = evt.clientX;
    mouseY.innerText = evt.clientY;
  }
}


document.addEventListener("click",toggle);

for(var i=0; i<mouseAreas.length; i++){
  mouseAreas[i].addEventListener("mousemove",updateMousePosition);
}
