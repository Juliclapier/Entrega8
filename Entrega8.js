function mostrar(){
var inputUno = document.getElementById("nombre").value.toLowerCase();
var inputDos = document.getElementById("apellido").value.toLowerCase();
var inputTres = document.getElementById("genero");
var inputGenero = inputTres.options[inputTres.selectedIndex].text
var infoUsuario = (inputUno + " " + inputDos + " " + inputGenero)
    console.log(infoUsuario);

    document.getElementById("saludo").innerHTML= "Bienvenidx " + inputUno;

}

