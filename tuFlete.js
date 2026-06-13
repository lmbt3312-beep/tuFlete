
const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    let correo =
    document.getElementById("correo").value;

    let password =
    document.getElementById("password").value;

    let usuario =
    JSON.parse(localStorage.getItem(correo));

    if(usuario == null){

        alert("Usuario no encontrado");
        return;

    }

    if(usuario.password === password){

        localStorage.setItem(
            "usuarioActivo",
            usuario.nombre
        );

        window.location.href =
        "dashboard.html";

    }else{

        alert("Contraseña incorrecta");

    }

});
    let registrarme =
    document.getElementById("registrarme"); 
    registrarme.addEventListener("click", function(){

        window.location.href =
        "registro-conductor.html";
    });

    Image.addEventListener("click", function(){

        window.location.href =
        "registro-conductor.html";
    });