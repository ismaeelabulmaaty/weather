
let searchBox = document.querySelector('.searchBox');
let searchBtn = document.querySelector('.searchBtn');
let weatherIcon = document.querySelector('.icon');
let mssg = document.querySelector('.massg');


async function checkWeather(city) {

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f41df5614de19152c12b989c1e61babb&units=metric`);
    let data = await response.json();


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "<sup>o</sup>C";
    document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";



    if (data.weather[0].main == 'clouds') {
        weatherIcon.src = "./images/113.png";
        mssg.innerHTML = 'clouds'

    } else if (data.weather[0].main == 'clear') {
        weatherIcon.src = "./images/302.png";
        mssg.innerHTML = 'lear'

    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "./images/176.png";
        mssg.innerHTML = 'Rain'

    } else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "./images/116.png";
        mssg.innerHTML = 'Mist'
    }
}


searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
})

