// JavaScript Document
function muestra(){
	//genera un objeto con el span.
	var bloque = document.getElementById("adicional");
	//Aplico la clase visible al bloque span.
	bloque.className = "visible"; 
	//Para ocultar el link obtengo su objeto.
	var link = document.getElementById("enlace");
	link.className = "oculto";

}