	var nombre = document.getElementById('nombre');
	var apellido = document.getElementById('apellido');
	var email = document.getElementById('email');
	var telefono = document.getElementById('telefono');
	var mensaje = document.getElementById('mensaje');
	var fecha = document.getElementById('fecha');

function valida() {
	
	var respuesta = true;

	
	if (nombre.value == "") {
		alert('Debe ingresar nombre')
		nombre.focus();
		respuesta = false;
		
		
	} else if (apellido.value == "") {
		alert('Debe ingresar apellido')
		apellido.focus();
		respuesta = false;
		
	} else if ((email.value == "") || (validaEmail(email.value) == false)) {
		alert('Debe ingresar email válido')
		email.focus();
		respuesta = false;
		
	} else if ((telefono.value == "") || (isNaN(telefono.value)) || (telefono.value.length < 9) || (telefono.value < 200000000)) {
		alert('Debe ingresar teléfono válido')
		telefono.focus();
		respuesta = false;
		
	} else if (mensaje.value == "") {
		alert('Debe ingresar mensaje')
		mensaje.focus();
		respuesta = false;
		
	} else if ((fecha.value == "") || (fecha.value) == false) {
		alert('Debe ingresar fecha de entrega válida')
		fecha.focus();
		respuesta = false;
	}
	if(respuesta){
		$('#modal').modal('show');
		limpiar();
	}
}
function limpiar(){

	nombre.value = "";
	apellido.value = "";
	email.value = "";
	telefono.value = "";
	mensaje.value = "";
	fecha.value = "";
}


function validaFecha(fecha){
var fechaf = fecha.split("-");
var day = fechaf[0];
var month = fechaf[1];
var year = fechaf[2];
var bisiesto = year % 4;

// Cada item corresponde a un mes desde 0 a 12. El mes 0 no se usa. Se usa para saber el total de días del mes.
var dias = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (bisiesto == 0) { // Si el año es bisiesto, febrero tiene 29 días.
dias[2] = 29;
}

if (year < 2020) {
return false;
}

if ((month < 1) || (month > 12)) {
return false;
}

if (day > dias[month * 1]) {
return false;
}

return true;
}

function validaEmail(email) {
if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)) {
return true;
}
else {
return false;
}
}
