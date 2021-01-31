function mostrar(){
    let inputUno = document.getElementById("nombre").value.toLowerCase();
let inputDos = document.getElementById("apellido").value.toLowerCase();
let inputTres = document.getElementById("genero");
let inputGenero = inputTres.options[inputTres.selectedIndex].text

    console.log(inputUno + " " + inputDos + " " + inputGenero);
}

