
let usuario =
JSON.parse(
localStorage.getItem("usuarioActivo")
);



if(!usuario){

    window.location.href =
    "login.html";

}



document.getElementById(
"bienvenida"
).innerText =
"Hola, " + usuario.nombre;



document.getElementById(
"cerrarSesion"
).addEventListener(
"click",
function(){

    localStorage.removeItem(
    "usuarioActivo"
    );

    window.location.href =
    "login.html";

});