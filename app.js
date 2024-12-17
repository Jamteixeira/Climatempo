const apiKey = 'a46910478b74ced9d7dbd440c55b4010'; //API KEY

async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    if (!cityInput) {
        alert('Por favor, digite o nome da Cidade que deseja.');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
        console.error('Erro ao obter dados meteorológicos:', error);
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    if (!data.main || !data.weather) {
        weatherDiv.innerHTML = `<p>Dados meteorológicos não disponíveis para a cidade especificada.</p>`;
        return;
    }
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    
    weatherDiv.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${description}</p>
    `;
}

// Remover a chamada inicial de getWeather() para não tentar buscar dados automaticamente
