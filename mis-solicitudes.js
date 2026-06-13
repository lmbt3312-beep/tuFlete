let solicitudes =
JSON.parse(
localStorage.getItem(
"solicitudes"
)) || [];

let contenedor =
document.getElementById(
"contenedorSolicitudes"
);

solicitudes.forEach(function(solicitud){

    contenedor.innerHTML += `

    <div class="card">

        <h2>${solicitud.origen}
        ➜
        ${solicitud.destino}</h2>

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

    </div>

    `;

});