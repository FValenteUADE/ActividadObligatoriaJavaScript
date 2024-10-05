window.onload = function() {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (formato: AAAA-MM-DD):");

    alert(`Bienvenido ${nombre} ${apellido}`);

    let fechaNacimientoObj = new Date(fechaNacimiento);
    let hoy = new Date();
    let diferenciaTiempo = hoy - fechaNacimientoObj;
    let diasVividos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

    alert(`Has vivido aproximadamente ${diasVividos} días.`);
}
