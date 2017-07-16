var form =  document.getElementsByTagName('form')[0];

var inputNombre = document.getElementById("nombre");
var inputApellidos = document.getElementById("apellidos");
var emailInput = document.getElementById("email");
var opConocidoInput = document.getElementById("opConocido");
var fechaInput = document.getElementById("fecha");
var submitButton = document.getElementById("enviar");
var inputTelefono = document.getElementById("telefono");

var conocidoInput = {
    conocido_1: document.getElementById("conocido_1"),
    conocido_1: document.getElementById("conocido_2"),
    conocido_1: document.getElementById("conocido_3")
};

var loadingIcon = document.createElement('i');
loadingIcon.classList.add("fa", "fa-spinner", "fa-spin");

form.addEventListener("submit", function (event) {
    if (inputNombre.checkValidity() === false) {
        alert("Escribe tu nombre");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

    if (inputApellidos.checkValidity() === false) {
        alert("Escribe tus apellidos");
        inputApellidos.focus();
        event.preventDefault();
        return false;
    }

    if (emailInput.checkValidity() === false) {
        alert("Introduce un email correcto");
        emailInput.focus();
        event.preventDefault();
        return false;
    }
    
    if (inputTelefono.checkValidity() === false) {
        alert("Introduce un telefono correcto");
        inputTelefono.focus();
        event.preventDefault();
        return false;
    }

    if (conocidoInput.conocido_1.checkValidity() === false) {
        alert("Introduce como nos has conocido");
        event.preventDefault();
        return false;
    }

  
    submitButton.setAttribute("disabled", "");
    submitButton.appendChild(loadingIcon);
    event.preventDefault();

    setTimeout(function () {
        form.reset();
        submitButton.removeAttribute("disabled");
        submitButton.removeChild(loadingIcon);
        sendNotification("Formulario recibido", "Body de ejemplo");
    }, 1000);
});
