// Agrega tu API Key de OpenWeatherMap aquí
const API_KEY = 'TU_API_KEY_AQUI';
// Borre la const de "Toluca" para que el usuario pueda elegir la ciudad desde el select y 
// movi la const de URL dentro de la función obtenerClima para que se actualice cada vez que el usuario seleccione una ciudad diferente.

const mostrarClima = (data) => {
    const { name, main, weather } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return `
        <h2>${name}</h2>
        <img src="${iconUrl}" alt="${weather[0].description}">
        <div class="temp-main">${Math.round(main.temp)} °C</div>
        <p class="description">${weather[0].description}</p>
        <div class="temp-range">  
            <span>Mín: ${Math.round(main.temp_min)} °C</span> |
            <span>Máx: ${Math.round(main.temp_max)} °C</span>
        </div>
    `;
};

// Cree la función obtenerClima que hace la solicitud a la API de OpenWeatherMap utilizando fetch. 
// Esta función toma el nombre de la ciudad como argumento, construye la URL de la API, y maneja la respuesta para mostrar el clima 
// o un mensaje de error si la ciudad no se encuentra. 
const obtenerClima = (ciudad) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;
    fetch(URL)
    .then(response => {
        if (!response.ok) throw new Error("Ciudad no encontrada");
        return response.json();
    })
    .then(data => {
        document.getElementById('climaCard').innerHTML = mostrarClima
        (data);
    })
    .catch(error => {
        document.getElementById('climaCard').innerHTML = `<p>Error: 
        ${error.message}</p>`;
    });
};

// Agregue un event listener al select de ciudades para que cada vez que el usuario cambie la selección, 
// se llame a la función obtenerClima con la ciudad seleccionada.
document.getElementById('ciudadSelect').addEventListener('change', (event) => {
    obtenerClima(event.target.value);
});

// Llamamos a la función obtenerClima inicialmente con una ciudad por defecto para mostrar el clima al cargar la página.
obtenerClima('Toluca');