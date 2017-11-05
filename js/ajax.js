
var API_URL = 'http://localhost:8000/api/';

function sendForm(data) {
	$.ajax({
		type: "POST",
		data: data,
		url: API_URL + "form"
	})
	.done(function( msg ) {
		alert("Enviado correctamente")
	})
	.fail(function (err) {
		console.error("Error enviando formulario");
	});
}
