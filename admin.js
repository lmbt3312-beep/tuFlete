let conductores =
JSON.parse(
localStorage.getItem(
"conductores"
)) || [];

let usuarios =
JSON.parse(
localStorage.getItem(
"usuarios"
)) || [];

let solicitudes =
JSON.parse(
localStorage.getItem(
"solicitudes"
)) || [];

document.getElementById(
"totalConductores"
).innerText =
conductores.length;

document.getElementById(
"totalUsuarios"
).innerText =
usuarios.length;

document.getElementById(
"totalSolicitudes"
).innerText =
solicitudes.length;

let lista =
document.getElementById(
"listaConductores"
);

conductores.forEach(
function(conductor,index){

    lista.innerHTML += `

    <div class="oferta-card">

        <h2>${conductor.nombre}</h2>

        <p>
            Ciudad:
            ${conductor.ciudad}
        </p>

        <p>
            Vehículo:
            ${conductor.vehiculo}
        </p>

        <p>
            Teléfono:
            ${conductor.telefono}
        </p>

        <p>
            Experiencia:
            ${conductor.experiencia} años
        </p>

        <p>
Estado:
${conductor.verificado ?
"Verificado" :
"Pendiente"}
</p>

        <button
        onclick="aprobar(${index})"
        class="btn-aceptar">

            Aprobar

        </button>

    </div>

    `;
    function aprobar(index){

    conductores[index].verificado = true;

    localStorage.setItem(
    "conductores",
    JSON.stringify(
    conductores
    ));

    alert(
    "Conductor aprobado"
    );

    

    location.reload();

}

});