 const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    let correo =
    document.getElementById("correo").value;

    let password =
    document.getElementById("password").value;

    if(
        correo === "admin@tuflete.com" &&
        password === "admin123"
    ){

        window.location.href =
        "admin.html";

        return;

    }

    let usuario =
    JSON.parse(
        localStorage.getItem(correo)
    );

    if(usuario == null){

        alert("Usuario no encontrado");
        return;

    }

    if(usuario.password === password){

        localStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuario)
        );

        if(usuario.tipo === "conductor"){

            window.location.href =
            "dashboard-conductor.html";

        }else{

            window.location.href =
            "dashboard.html";

        }

    }else{

        alert("Contraseña incorrecta");

    }

});