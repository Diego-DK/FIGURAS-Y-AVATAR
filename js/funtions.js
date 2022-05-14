function circulo(){
    var selector= document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("circulo");

}

function arriba(){
    var selector= document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("arriba");

}

function abajo(){
    var selector= document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("abajo");

}

function izquierda(){
    var selector = document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("izquierda");
}

function derecha(){
    var selector = document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("derecha");
}

function DGarriba(){
    var selector = document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("DGarriba");
}

function DGabajo(){
    var selector = document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("DGabajo");
}

function imagen(){
    var selector = document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("imagen");
}

function rombo(){
    var selector = document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("rombo");
}
function tri(){
    var selector = document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("tri");
}


function recH(){
    var selector = document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("recH");
}

function recV(){
    var selector = document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("recV");
}

/*capturamos los los valores de los caompos del formulario a traves de su id y el atributo getelemen*/

function capDatos(){
    var nombre = document.getElementById("cNombre").value;
    var edad= document.getElementById("cEdad").value;
    var fecha=document.getElementById("cFechadenacimiento").value;
    var genero=document.getElementById("cGenero").value;
    var email=document.getElementById("cEmail").value;
    var descripcion=document.getElementById("cDescripcion").value;
    var color=document.getElementById("cColor").value;
/*capturAMOS TODOS los parrafos donde mostraremos la informacion*/

var name=document.getElementById("mNombre");
var age=document.getElementById("mEdad");
var date=document.getElementById("mEdad");
var gender=document.getElementById("mGenero");
var e_mail=document.getElementById("mEmail");
var description=document.getElementById("mDescripcion");
var colour=document.getElementById("mColor");

name.textContent = nombre;
age.textContent = edad;
date.textContent = fecha;
gender.textContent = genero;
e_mail.textContent = email;
description.textContent = descripcion;
colour.textContent = color;

//*capturamos el contenedor del avatar para luego cambiar su color de fondo*//

var selector = document.getElementById("card-avatar")
/*if (color == "rojo" ) {
    selector.style.backgroundColor = "red";
} else if (color == "amarillo"){
    selector.style.backgroundColor = "yellow";
}else if (color == "azul"){
    selector.style.backgroundColor = "blue";*/
    switch(color) {
        case "rojo":
          selector.style.backgroundColor = "red";

          break;
        case "amarillo":
          selector.style.backgroundColor ="yellow";
          break;
        default:
          selector.style.backgroundColor = "blue";
      }

/* cepturar la foto del avatar paara cambiar la foto del avatar*/
    var imgavatar =  document.getElementById("foto")

    switch (genero){
        case "masculino":
            imgavatar.src= "img/masculino.png"
            break;
        default:
            imgavatar.src= "img/mujer.png"
    }
   



}












