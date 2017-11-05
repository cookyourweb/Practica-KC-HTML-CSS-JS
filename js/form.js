$( document ).ready(function() {
	var form = $('#formContact');

	var inputNombre = $("#nombre")[0];
	var inputPhone = $('#phone')[0];
	var inputEmail = $('#email')[0];
	var inputConocido = $('#conocido');
	var comentariosTextarea = $('#comentarios');

	var inputOtros = document.createElement("input");
	inputOtros.setAttribute("id", "conocido_otro");
	inputOtros.setAttribute("type", "text");
	inputOtros.setAttribute("name", "conocido_otro");
	inputOtros.setAttribute("placeholder", "Otro...");
	inputOtros.setAttribute("required", "");

	inputConocido.change(function(event) {
		if ($( "select option:selected" ).val() == 'otro') {
			inputConocido.after( inputOtros);
		} else {
			if($('#conocido_otro').length) {
				$('#conocido_otro').remove();
			}
		}
	})

	form.submit(function(event) {
		if($('#conocido_otro').length && $('#conocido_otro')[0].checkValidity() == false) {
			alert("Escribe como me has conocido");
			$('#conocido_otro')[0].focus();
			event.preventDefault();
			return false;
		}

		if(inputNombre.checkValidity() == false) {
			alert("Escribe tu nombre");
			inputNombre.focus();
			event.preventDefault();
			return false;
		}

		if(email.checkValidity() == false) {
			alert("Escribe tus email correcto");
			email.focus();
			event.preventDefault();
			return false;
		}

		if(phone.checkValidity() == false) {
			alert("Escribe tu telefono");
			phone.focus();
			event.preventDefault();
			return false;
		}

		if (countWords(comentariosTextarea.val()) > 150) {
			alert("Solo puedes introducir 150 palabras.")
			comentariosTextarea.focus();
			event.preventDefault();
			return false;
		}

		sendForm({
			'name': inputNombre.value,
			'phone': inputPhone.value,
			'email': inputEmail.value,
			'conocido': inputConocido.val(),
			'comentarios': comentariosTextarea.val()
		});
		event.preventDefault();
		return false;

	});

	function countWords (phrase) {
		var phraseReplaceSpaces = phrase.replace(/\s\s+/g, ' ').trim();
		var arrayOfWords = phraseReplaceSpaces.split(' ');
		var numberOfWords = arrayOfWords.length;
		return numberOfWords;
	}



    
});
