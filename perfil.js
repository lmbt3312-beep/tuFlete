let usuario =
JSON.parse(
localStorage.getItem(
"usuarioActivo"
)
);

document.getElementById(
"nombreUsuario"
).innerText =
usuario.nombre;

document.getElementById(
"nombre"
).value =
usuario.nombre;

document.getElementById(
"correo"
).value =
usuario.correo;

document.getElementById(
"perfilForm"
).addEventListener(
"submit",
function(e){

e.preventDefault();

usuario.nombre =
document.getElementById(
"nombre"
).value;

usuario.correo =
document.getElementById(
"correo"
).value;

localStorage.setItem(
"usuarioActivo",
JSON.stringify(usuario)
);

alert(
"Perfil actualizado"
);



});