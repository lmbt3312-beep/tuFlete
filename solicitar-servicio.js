const formulario =
document.getElementById("servicioForm");

formulario.addEventListener(
"submit",
function(e){

    e.preventDefault();

    let solicitud = {

        origen:
        document.getElementById("origen").value,

        destino:
        document.getElementById("destino").value,

        vehiculo:
        document.getElementById("vehiculo").value,

        fecha:
        document.getElementById("fecha").value,

        descripcion:
        document.getElementById("descripcion").value

    };

    let solicitudes =
    JSON.parse(
    localStorage.getItem(
    "solicitudes"
    )) || [];

    solicitudes.push(
    solicitud
    );

    localStorage.setItem(
    "solicitudes",
    JSON.stringify(
    solicitudes
    ));

    alert(
    "Solicitud publicada correctamente"
    );

    window.location.href =
    "dashboard.html";

});