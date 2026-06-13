const formulario =
document.getElementById(
"registroConductor"
);

formulario.addEventListener(
"submit",
function(e){

    e.preventDefault();

    let conductor = {

        nombre:
        document.getElementById(
        "nombre"
        ).value,

        correo:
        document.getElementById(
        "correo"
        ).value,

        password:
        document.getElementById(
        "password"
        ).value,

        ciudad:
        document.getElementById(
        "ciudad"
        ).value,

        telefono:
        document.getElementById(
        "telefono"
        ).value,

        vehiculo:
        document.getElementById(
        "vehiculo"
        ).value,

        capacidad:
        document.getElementById(
        "capacidad"
        ).value,

        experiencia:
        document.getElementById(
        "experiencia"
        ).value,

        verificado:false

    };

    let conductores =
    JSON.parse(
    localStorage.getItem(
    "conductores"
    )) || [];

    conductores.push(
    conductor
    );

    localStorage.setItem(
    "conductores",
    JSON.stringify(
    conductores
    ));

    alert(
    "Registro exitoso"
    );

    window.location.href =
    "login.html";

});