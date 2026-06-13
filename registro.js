const formulario =
document.getElementById("registroForm");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre =
    document.getElementById("nombre").value;

    let correo =
    document.getElementById("correo").value;

    let password =
    document.getElementById("password").value;

    let usuario = {

        nombre,
        correo,
        password

    };

    localStorage.setItem(
        correo,
        JSON.stringify(usuario)
    );

    alert("Usuario registrado");

    window.location.href =
    "login.html";

});