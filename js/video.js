// Guardamos en una variable la etiqueta video
var video = document.getElementById("video");

//Cargamos los metodos para que no nos dé errores o fallos reconocer el video
window.onload = () => {

    video.setAttribute("onclick", "iniciarParar()");
    video.setAttribute("onclick", "subirVolumen()");
    video.setAttribute("onclick", "reiniciar()");
    video.setAttribute("onclick", "stop()");
    video.setAttribute("onclick", "muted()");
    duracion.innerHTML = convertirSegundos(video.currentTime) + "/" + convertirSegundos(video.duration);
}

// Guardamos en una variable el boton muted
var mutear = document.getElementById("muted");
// Guardamos en una variable el boton iniciar/parar
var playPause = document.getElementById("iniciar/parar");

//Creamos la funcion para iniciar o pausar el video
function iniciarParar() {
    // Si el video está en pause, reanudaremos el video
    if (video.paused) {
        video.play();
        //Una vez reanudado el video, cambiamos el icono 
        playPause.innerHTML = "<img src='./iconos/pausa.svg'/>";

    } else {
        video.pause();
        //Una vez pausado el video, cambiamos el icono 
        playPause.innerHTML = "<img src='./iconos/play.svg'/>";


    }
}

//Funcion donde subiremos el volumen
function subirVolumen() {
    //Controlamos que no puedas pasarte del limite sumando el volumen
    if (video.volume < 1) {
        video.volume += 0.1;

    }
}

//Funcion donde bajaremos el volumen
function bajarVolumen() {
    //Controlamos que puedas restar hasta un valor negativo.
    if (video.volume > 0.1) {
        video.volume -= 0.1;
    }
}

//Funcion para reiniciar el video, pondremos la cancion al segundo 0
// Y volvemos a ejecutar el video
function reiniciar() {
    video.currentTime = 0;
    if (video.paused) {
        video.play();
        //Cambiaremos el icono una vez reiniciado 
        playPause.innerHTML = "<img src='iconos/pausa.svg'/>";
    }
}

//Funcion para parar el video y volver al inicio del mismo 
function stop() {
    video.currentTime = 0;
    video.pause();
    playPause.innerHTML = "<img src='iconos/play.svg'/>";

}

//Funcion Silenciar el video
function muted() {

    if (video.muted) {
        video.muted = false;
        //Cambiamos el icono del altavoz
        mutear.innerHTML = "<img src='iconos/altavoz.svg'/>";
        volumenbarra.value = 100;
    } else {
        video.muted = true;
        //Cambiamos el icono del altavoz
        mutear.innerHTML = "<img src='iconos/muted.svg'/>";
        volumenbarra.value = 0;
    }
}

//Guardamos en una variable el div que contendrá la duración del video
var duracion = document.getElementById("duracion");

//Creamos un evento que se realizará cuando el currentTime es actualizado
video.addEventListener("timeupdate", function () {
    //Damos formato a la duración y los segundos transcurridos y llamamos a la funcion creada pasando por parametro los
    //atributos currentTime y duration.
    duracion.innerHTML = convertirSegundos(video.currentTime) + "/" + convertirSegundos(video.duration);

}, true);

//Funcion para convertir los segundos que devuelven currentTime y duration a minutos
function convertirSegundos(segundos) {
    //Creamos una variable Fecha y multiplicamos los segundos para que nos dé exacto
    var fecha = new Date(segundos * 1000);
    var minutos = 0;
    var segundos = 0;

    if (fecha.getMinutes() < 9) {
        minutos = fecha.getMinutes();
    } else {
        minutos = fecha.getMinutes();
    }
    //Concatenamos 0 delante de los segundos si el numero tiene menos de 2 cifras
    if (fecha.getSeconds() <= 9) {
        segundos = "0" + fecha.getSeconds();
    } else {
        segundos = fecha.getSeconds();
    }
    //Devolvemos los minutos y segundos en un formato
    return minutos + ":" + segundos;

}

//Funcion para adelantar o atrasar los segundos que queramos el video
function adelantarAtrasar(segundos) {
    if (segundos == 0) {
        video.currentTime = segundos;
    }
    else {
        video.currentTime += segundos;
    }
}

// Retrasamos 10 segundos
document.getElementById("atrasar").addEventListener("click", function () {
    adelantarAtrasar(-10);
}, false);

//  Avanzamos 10 seconds
document.getElementById("adelantar").addEventListener("click", function () {
    adelantarAtrasar(10);
}, false);

//Funcion para poder aumentar la pantalla en todos los formatos
function pantalla(formatovideo) {
    if (formatovideo.requestFullscreen) {
        formatovideo.requestFullscreen();
    } else if (formatovideo.mozRequestFullScreen) {
        formatovideo.mozRequestFullScreen();
    } else if (formatovideo.webkitRequestFullscreen) {
        formatovideo.webkitRequestFullscreen();
    } else if (formatovideo.msRequestFullscreen) {
        formatovideo.msRequestFullscreen();
    }
}
//Creamos un evento para que al hacer clic en el icono, se llamará a la funcion
document.getElementById("pantallaCompleta").addEventListener("click", function (e) {
    pantalla(video);
}, false);

//Funciones para modificar la velocidad del video
function aumentarVelocidad() {

    video.playbackRate += 0.1;
}
function disminuirVelocidad() {

    video.playbackRate -= 0.1;
}

//Creamos una variable que contenga la id de la barra de progreso
var barra = document.getElementById("barra");


//Utilizamos la funcion ontimeupdate para hacer un evento que se active 
//cuando la posicion del reproductor haya cambiado/avanzado.

video.ontimeupdate = function () {
    var posicion = video.currentTime; // posicion actual 
    var duracion = video.duration; // duracion maxima del video
    //Cambiaremos el atributo max de la barra para añadirle la duracion del video
    document.getElementById('barra').setAttribute("max", duracion);
    //Cambiaremos el valor de la barra con la posicion actual del video
    barra.value = posicion;
};

//Evento para modificar el volumen llamando a la funcion modificarVolumen
volumenbarra = document.getElementById("volumen");
volumenbarra.addEventListener("change", modificarVolumen, false);

//Funcion para modificar los atributos del volumen 
function modificarVolumen() {
    video.volume = volumenbarra.value / 100;
    //Si el volumen llega a 0 cambiamos el icono a muteado.
    if (volumenbarra.value == 0) {
        mutear.innerHTML = "<img src='iconos/muted.svg'/>";
        video.muted = true;
  
    } else {
        mutear.innerHTML = "<img src='iconos/altavoz.svg'/>";
        video.muted = false;
        
    }
}