const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const wind_speed = document.querySelector('#wind-speed');
const humidity = document.querySelector('#humidity');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');



async function checkWeather(city) {
    const api_key = "721df2b806f3b9bd5e23aa3d568a2477";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`; //important





    const weather_data = await fetch(`${url}`).then(response => response.json()); //read || converting  json file into string file




    //-------------------------------important ------
    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }//--------------------------------------------




    location_not_found.style.display = "none";
    weather_body.style.display = "flex";



    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;//------------

    description.innerHTML = `${weather_data.weather[0].description}`;//back ticks  = template literals


    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}km/Hr`;


    switch (weather_data.weather[0].main) {
        case 'Clouds': weather_img.src = "sun_1888282.png";
            break;
        case 'Clear': weather_img.src = "sun_2784139.png";
            break;
        case 'Rain': weather_img.src = "storm_2864448.png";
            break;
        case 'Mist': weather_img.src = "storm_10522456.png";
            break;
        case 'Snow': weather_img.src = "snow_2204343.png";
            break
        case 'Night': weather_img.src = "night_7687113.png";
            break;
    }
    if (Math.round(weather_data.main.temp - 273.15) <= 10) {

        weather_img.src = "cold_3815408.png";

    }

}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})
