let solicitudes =
JSON.parse(
localStorage.getItem(
"solicitudes"
)) || [];

let contenedor =
document.getElementById(
"contenedorSolicitudes"
);

solicitudes.forEach(function(solicitud,index){

contenedor.innerHTML += `

<div class="card">

<h2>

${solicitud.origen}
➜
${solicitud.destino}

</h2>

<p>
Vehículo:
${solicitud.vehiculo}
</p>

<p>
Fecha:
${solicitud.fecha}
</p>

<p>
${solicitud.descripcion}
</p>

<button onclick="enviarOferta(${index})">

Enviar Oferta

</button>

</div>

`;

});

function enviarOferta(id){

    localStorage.setItem(
        "solicitudSeleccionada",
        id
    );

    window.location.href =
    "oferta.html";

}