const conductorForm =
document.getElementById("conductorForm");

conductorForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    let conductor = {

        nombre:
        document.getElementById("nombre").value,

        ciudad:
        document.getElementById("ciudad").value,

        telefono:
        document.getElementById("telefono").value,

        vehiculo:
        document.getElementById("vehiculo").value,

        capacidad:
        document.getElementById("capacidad").value,

        experiencia:
        document.getElementById("experiencia").value

    };

    localStorage.setItem(
        "conductorActivo",
        JSON.stringify(conductor)
    );

    alert(
        "Perfil guardado correctamente"
    );

});