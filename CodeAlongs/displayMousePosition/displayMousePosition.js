var tracking = false;

var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");

var x = document.getElementsByName("btnToggle");

function toggle(){
  if(tracking){
    for(var i=0; i < x.length; i++){
      x[i].classList.remove("btn-danger");
      x[i].classList.add("btn-success");
      x[i].innerText = "Start mouse tracking.";

      mouseX.innerText = "Untracked";
      mouseY.innerText = "Untracked";
    }


  }else{
    for(var i=0; i < x.length; i++){
      x[i].classList.remove("btn-success");
      x[i].classList.add("btn-danger");
      x[i].innerText = "Stop mouse tracking.";
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


for(var i=0; i < x.length; i++){
  x[i].addEventListener("click",toggle);
}

document.addEventListener("mousemove",updateMousePosition);
