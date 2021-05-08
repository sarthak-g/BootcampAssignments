const div = document.getElementById("weatherContent");
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
async function getWeatherDetails(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=<API_KEY>`;
    const response = await fetch(url);
    const fetchedData = await response.json()
    if(fetchedData.cod == "404") {
        div.innerHTML = '<h3>City Not Found</h3>'
        return
    }
    var date = new Date(fetchedData.dt * 1000)
    const dateText = `${days[date.getDay()]}, ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getUTCFullYear()}`
    const icon = `http://openweathermap.org/img/wn/${fetchedData.weather[0].icon}.png`
    div.innerHTML = 
    `
        <h3>${fetchedData.name}, ${fetchedData.sys.country}</h3>
        <h4>${dateText}</h4>
        <h1 style='font-size: 5rem;'>${Math.round(fetchedData.main.temp - 273.15, 2)} <sup>o</sup>C</h1>
        <h4><img src=${icon}>${fetchedData.weather[0].main}</h4>
        <h4>${Math.round(fetchedData.main.temp_min - 273.15, 2)}/${Math.round(fetchedData.main.temp_max - 273.15, 2)} <sup>o</sup>C</h4>
    `
}

const form = document.getElementById("cityForm");
form.addEventListener('submit', function(e) {
    getWeatherDetails(form.elements[0].value)
    form.elements[0].value = ""
    e.preventDefault()
})
