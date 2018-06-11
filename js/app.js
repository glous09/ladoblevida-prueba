$(document).ready(function(){
    $('#save-name').click(function(){
        /*Captura de datos escrito en los inputs*/
        var nom = document.getElementById("name").value;

        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Nombre", nom);


    });
});

//Funcion Cargar y Mostrar datos del imput name
$(document).ready(function(){
    $('#boton-cargar').click(function(){

        //Obtener datos almacenados
        var nombre = localStorage.getItem("Nombre");

        //Mostrar datos almacenados
        document.getElementById("nombre").innerHTML = "Hola: " +nombre;
   });
});
