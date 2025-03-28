// script.js

// Define a data para o evento (10 de abril de 2025)
const targetDate = new Date("April 10, 2025 00:00:00").getTime();

// Atualiza a contagem regressiva a cada segundo
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calcula dias, horas, minutos e segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Atualiza os elementos da página
    document.getElementById("dias").innerHTML = `${days}d`;
    document.getElementById("horas").innerHTML = `${hours}h`;
    document.getElementById("minutos").innerHTML = `${minutes}m`;
    document.getElementById("segundos").innerHTML = `${seconds}s`;

    // Quando a contagem regressiva terminar, mostra a mensagem de "Feliz dia!"
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector(".message p").innerHTML = "Feliz dia! O evento chegou!";
    }
}, 1000);
