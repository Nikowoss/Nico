function b() {
    swal("Ingresa tu correo para poder cambiar la contraseña", {
        content: "input",
    })
        .then((value) => {
            swal(`Se a enviado un correo para cambio de contraseña.`);
        });
}