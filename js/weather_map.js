"use strict";

// COA:
//      - create html div to hold weather cards with class 'weather_cards'
//      - gather data from API (weather object) and select html div.html and pass data to organizeData f(x)
//      - create organizeData f(x) and return one object for each of the 5 days with the following info: date, max temp, min temp, weather description, humidity,
//          wind, pressure
//      - build cards per day
//            -
// ------------------------Five Day Weather API Data------------------------


let startLat = 32.7157;
let startLon = -117.1611;

getWeatherData(startLat, startLon);

// fetch uses the weather URL as a parameter
function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&&appid=${OWM_KEY}`)
        .then((response) => { //function that takes in response data as parameter then turns it into readable JSON
            return response.json();
        })
        .then((response) => {
            let DailyWeatherData = response.daily
            cardContent(DailyWeatherData);
            // $('#weather_cards').html(cardContent(DailyWeatherData));
        })
        .catch(function (error) {
            console.log(error);// handles the error
        });
}


function scrubData(dailyData, day) {
    return {
        date: formatDate(dailyData[day].dt),
        minTemp: dailyData[day].temp.min,
        maxTemp: dailyData[day].temp.max,
        icon: dailyData[day].weather[0].icon,
        weatherDesc: dailyData[day].weather[0].description,
        humidity: dailyData[day].humidity,
        windSpeed: dailyData[day].wind_speed,
        pressure: dailyData[day].pressure
    }
}

function formatDate(date) {
    return new Date(date * 1000).toISOString().split('T')[0];
}

function cardContent(unscrubData) {
    $('.weather_cards').empty();
    for (let i = 0; i < 5; i++) {
        let day = i;
        let scrubbedData = scrubData(unscrubData, day);
        buildCard(scrubbedData, day);
    }
}

function buildCard(dailyWeatherData, day) {
    let newCard = '';
    newCard +=
        // language=HTML
        `<div class="col-12 col-md-6 col-lg-4">
              <div class="card justify-content-center">
                <div class="card-header text-center">
                    ${dailyWeatherData.date}
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item">${dailyWeatherData.minTemp} / ${dailyWeatherData.maxTemp}</li>
                    <li class="list-group-item text-center"><img src="http://openweathermap.org/img/w/${dailyWeatherData.icon}.png" alt="weather description icon"   ${dailyWeatherData.icon}></li>
                    <li class="list-group-item">Description: ${dailyWeatherData.weatherDesc}</li>
                    <li class="list-group-item">Humidity: ${dailyWeatherData.humidity}</li>
                    <li class="list-group-item">Wind Speed: ${dailyWeatherData.windSpeed} mph</li>
                    <li class="list-group-item">Pressure: ${dailyWeatherData.pressure}</li>
                </ul>
            </div>
        </div>`
    $('.weather_cards').append(newCard);
}



