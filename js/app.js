const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');
document.addEventListener('DOMContentLoaded',()=>{
mostrarMenu();
cerrarMenu();
fechaActual();
});
function mostrarMenu(){
hamburguesa.addEventListener('click',()=>{
navegacion.classList.toggle('ocultar');
}); 
}
function cerrarMenu(){
enlaces.forEach(enlace =>{
enlace.addEventListener('click',(e)=>{
e.preventDefault();
const seccion =
document.querySelector(e.target.attributes.href.value);
cambioSeccion(seccion);
if(e.target.tagName === 'A'){
navegacion.classList.add('ocultar');
}
});
});
}
function cambioSeccion(seccion){
seccion.scrollIntoView({
behavior:'smooth'
})
}
function fechaActual(){
let fechaHoy = new Date().getFullYear();
fecha.textContent = fechaHoy;
}
DRAME.MD
# Business_Tecnology_web
Desarrollo de una página web con html5, css3 y javascript
Tutorial :https://youtu.be/kM7fDbq0I_M
![Miniatura](https://user-images.githubusercontent.com/79062163/136498180-
aae332e6-7d09-4931-bd83-9326737b16e1.jpg)