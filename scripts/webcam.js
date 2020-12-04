
var camera;
var constraints = {audio:true, video:true};

window.addEventListener("load", function() {
    camera = document.getElementById("cameraStream")
}, false);

var localWebcamStream;

async function startCapture() {
    try {
        localWebcamStream = await navigator.mediaDevices.getUserMedia(constraints);
        camera.srcObject=localWebcamStream;
    } catch(err) {
      console.error("Error: " + err);
    }
  }

function getUserMedia_click() {
    startCapture();
    camera.play();
    camera.muted=true;
}