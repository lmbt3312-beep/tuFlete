const ofertaForm =
document.getElementById("ofertaForm");

ofertaForm.addEventListener(
"submit",
function(e){

e.preventDefault();

let oferta = {

precio:
document.getElementById(
"precio"
).value,

mensaje:
document.getElementById(
"mensaje"
).value

};

let ofertas =
JSON.parse(
localStorage.getItem(
"ofertas"
)) || [];

ofertas.push(oferta);

localStorage.setItem(
"ofertas",
JSON.stringify(ofertas)
);

alert(
"Oferta enviada correctamente"
);

window.location.href =
"solicitudes-disponibles.html";

});