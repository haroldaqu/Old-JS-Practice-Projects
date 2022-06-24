
const getWeather =  (() => {
    // Grab Elements
    const apiKey = '8f793e1b8251f9cf6bc509f8d010e538';
    const searchBar = document.querySelector('.search-bar')
    const cityName = document.querySelector('.city-name')
    const temp = document.querySelector('.temp')
    const humidty = document.querySelector('.humidity')
    const WindSpeed = document.querySelector('.wind-speed')
    
    // Grab Weather API Data
    const fetchWeather = async (city) => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=8f793e1b8251f9cf6bc509f8d010e538`)
        // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&APPID=8f793e1b8251f9cf6bc509f8d010e538`)
        const weatherData = await response.json()  
        return displayWeather(weatherData)
    }
    
    // Display weather data in console
    const displayWeather = (data) =>  {
        cityName.innerText = data.name 
        temp.innerText =  `Temp: ${data.main.temp} °F`
        humidty.innerText =  `Humidty: ${data.main.humidity}%`
        WindSpeed.innerText =  `Wind Speed: ${data.wind.speed} Mph`
    }

    const searchWeather = () => {
        fetchWeather(searchBar.value)
    }
    return {fetchWeather, displayWeather, searchWeather}
})()

// Button search
const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', () => {
    getWeather.searchWeather()
})





