function b() {
    swal("Ingresa tu correo para poder cambiar la contraseña", {
        content: "input",
    })
        .then((value) => {
            swal(`Se a enviado un correo para cambio de contraseña.`);
        });
}


function validar() {
    var usuario, pass
    usuario = document.getElementById("usuario").value
    pass = document.getElementById("pass").value

    if (usuario == "" || pass == "") {
        swal("Todos los campos son obligatorios", "favor rellenar", "warning");
        return false;
    }
    else{
        return true;
    }
}