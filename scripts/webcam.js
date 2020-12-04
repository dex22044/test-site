
var camera;
var constraints = {audio:true, video:true};

window.addEventListener("load", function() {
    camera = document.getElementById("cameraStream")
}, false);

async function startCapture() {
  
    try {
        camera.srcObject = await navigator.mediaDevices.getUserMedia(constraints);
    } catch(err) {
      console.error("Error: " + err);
    }
  }

function getUserMedia_click() {
    startCapture();
    camera.play();
    camera.muted=true;
}