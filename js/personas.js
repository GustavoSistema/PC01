const personasYOficios = [
    { nombre: "Juan", oficio: "Programador" },
    { nombre: "María", oficio: "Diseñadora" },
    { nombre: "Luana", oficio: "Secretaria" },
    { nombre: "Marcos", oficio: "Contador" },
    { nombre: "Gustavo", oficio: "Gerente" }
];

function mostrarPersonas() {
    const oficio = document.getElementById('select-oficio');

    personasYOficios.forEach(persona => {
        const opcion = document.createElement('option');
        opcion.value = persona.oficio;
        opcion.textContent = persona.oficio;
        oficio.appendChild(opcion);
    });
}

function Tabla() {
    const tabla = document.getElementById('tabla-personas');

    personasYOficios.forEach(persona => {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${persona.nombre}</td><td>${persona.oficio}</td>`;
        tabla.appendChild(fila);
    });
}

window.onload = function () {
    mostrarPersonas();
    Tabla();

    const contratarBtn = document.getElementById('contratarBtn');
    contratarBtn.addEventListener('click', () => {
        const oficio = document.getElementById('select-oficio');
        const seleOficio = oficio.value;
        const pContratada = personasYOficios.find(persona => persona.oficio === seleOficio);

        if (pContratada) {
            console.log("Persona a cargo:", pContratada.nombre);
            const resultadoContratacion = document.getElementById('resultado-contratacion');
            resultadoContratacion.textContent = "Persona a cargo: " + pContratada.nombre;
        } else {
            console.log("No eres galactico");
            const resultadoContratacion = document.getElementById('resultado-contratacion');
            resultadoContratacion.textContent = "No eres galactico";
        }
    });
};
