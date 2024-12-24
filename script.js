// Generar copos de nieve dinámicamente
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Tamaño aleatorio
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duración aleatoria
    snowflake.style.animationDelay = Math.random() * 5 + 's'; // Retraso aleatorio
    snowflake.innerText = '❄'; // Copo de nieve

    document.body.appendChild(snowflake);

    // Eliminar el copo una vez que sale de la pantalla
    setTimeout(() => {
      snowflake.remove();
    }, 10000); // 10 segundos
  }

  // Crear múltiples copos de nieve
  setInterval(createSnowflake, 200); // Cada 200ms se crea un copo

  var audio = document.getElementById('miAudio');
        // Ajustar el volumen (de 0.0 a 1.0, donde 0.0 es sin sonido y 1.0 es el volumen máximo)
        audio.volume = 0.2; // Volumen bajo