function contactar() {
    let bolsa = document.querySelectorAll('.form-control');
    let nombre = bolsa[0].value;
    let correo = bolsa[1].value;
    let mensaje = bolsa[2].value;

    for (let i = 0; i < bolsa.length; i++) {
        const elemento = bolsa[i].value;

        if (!nombre || !correo || !mensaje) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Datos incompletos, complete los campos por favor"
            });
            return;
        } else {
            Swal.fire({
                title: nombre + " ✅ Tu mensaje ha sido enviado. Gracias por contactarnos",
                icon: "success",
                draggable: true
            });
            return;
        }
    }
}