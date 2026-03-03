function reservas() {
    let bolsa = document.querySelectorAll('.form-control');
    let nombre = bolsa[0].value;
    let correo = bolsa[1].value;
    let fecha = bolsa[2].value;
    let hora = bolsa[3].value;
    let personas = bolsa[4].value;

    for (let i = 0; i < bolsa.length; i++) {
        const elemento = bolsa[i].value;

        if (!nombre || !correo || !fecha || !hora || !personas) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Datos incompletos, complete los campos por favor"
            });
            return;
        } else {
            Swal.fire({
                title: nombre + " 🎉 Su reserva ha sido exitosa. Gracias por elegirnos",
                icon: "success",
                draggable: true
            });
            return;
        }
    }
}