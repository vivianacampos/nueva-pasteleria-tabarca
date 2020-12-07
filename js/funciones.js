// JavaScript Document
function muestra(){
	var bloque = document.getElementById("adicional");
	bloque.className = "visible"; 
	var link = document.getElementById("enlace1");
	link.className = "oculto";
}
function oculto(){
	var bloque = document.getElementById("adicional");
	bloque.className = "oculto";
	var link = document.getElementById("enlace1");
	link.className = "visible";
}

