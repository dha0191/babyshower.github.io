// La fecha y hora de destino: 6 de diciembre a las 9:00 AM
// El formato es: Año, Mes (0-11), Día, Hora, Minuto, Segundo
// Noviembre es 10, Diciembre es 11.
const targetDate = new Date(2025, 11, 6, 9, 0, 0).getTime(); 

// Función para actualizar el contador
function updateCountdown() {
    // Obtener la fecha y hora actual
    const now = new Date().getTime();
    
    // Calcular la diferencia (distancia) en milisegundos
    const distance = targetDate - now;

    // Lógica para el cálculo de tiempo
    // 1 día = 24 * 60 * 60 * 1000 milisegundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Seleccionar los elementos del HTML
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Mostrar los resultados en los elementos correspondientes
    if (distance > 0) {
        // Añadir un cero a la izquierda si el número es menor a 10
        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
        minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    } else {
        // Si la cuenta regresiva termina
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "¡Ya empezó el evento!";
        document.querySelector("h1").innerHTML = "🎉 ¡HOY ES EL GRAN DÍA! 🎉";
    }
}

// Actualizar el contador cada 1 segundo (1000 milisegundos)
// Guardamos el intervalo en una variable para poder detenerlo (clearInterval)
const interval = setInterval(updateCountdown, 1000);

// Llamar a la función al inicio para evitar un retraso de 1 segundo
updateCountdown();