document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

    // Obtener el valor de la edad
    const age = parseInt(document.getElementById('age').value);

    // Crear el mensaje de resultado
    let message = '';

    // Verificar si es mayor o menor de edad
    if (age >= 18) {
        message = 'Eres mayor de edad.';
    } else {
        message = 'Eres menor de edad.';
    }

    // Mostrar el resultado en el div con id "result"
    document.getElementById('result').textContent = message;
});
