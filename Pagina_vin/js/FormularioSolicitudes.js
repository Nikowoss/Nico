function validar() {
    var titulo, descripcion, tipo,
    titulo = document.getElementById("titulo").value
    descripcion = document.getElementById("descripcion").value
    tipo = document.getElementById("tipo").value

    if (titulo == "" || descripcion == "" || tipo == "") {
        swal("Todos los campos son obligatirios", "favor rellenar", "warning");
        return false;
    }
    else if (titulo.length > 50) {
        swal("Tiulo demaciado largo", "50 caracteres max", "warning");
        return false;
    }
    else if (descripcion.length > 500) {
        swal("Descripcion demaciada larga", "500 caracteres max", "warning");
        return false;
    }
    else if(titulo=true,descripcion=true,tipo=true){
        swal({
            title: "Estas seguro de crear una solicitud?",
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Solicitud enviada con exito", {
                        icon: "success",
                    })
                    return false;
                } else {
                    return false;
                }
            });
    }
}
formulario.addEventListener('subbmit', (e) => {
    
})

function confirmacion(){
    var res = swal({
            title: "Estas seguro de crear una cuenta?",
            icon: "info",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Solicitud enviada con exito", {
                    icon: "success",
                }) 
            } else {
                return false;
            }
        });
            
    if(res==true){
        
        return true;
    }
    else{
        return false;
    }

}
