
var camera;
var constraints = {audio:true, video:true};

window.addEventListener("load", function() {
    camera = document.getElementById("cameraStream")
}, false);

function getUserMedia_success(stream) {
    console.log("getUserMedia_success():", stream);
    localVideo1.src = URL.createObjectURL(stream); // Подключаем медиапоток к HTML-элементу <video>
    localStream = stream; // и сохраняем в глобальной переменной для дальнейшего использования
}

function getUserMedia_error(error) {
    console.log("getUserMedia_error():", error);
}

function getUserMedia_click() {
    console.log("getUserMedia_click()");
    navigator.webkitGetUserMedia(
        constraints,
        getUserMedia_success,
        getUserMedia_error
    );
}