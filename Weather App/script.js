const apiKey = "218948ffb63c1a4e04a545dccfafc95d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {

        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").style.fontSize = "30px";
        document.querySelector(".weather").style.display = "none";

    }
    // {
    //     document.querySelector(".city").innerHTML = "Not found!";
    //     document.querySelector(".temp").innerHTML = "--" + "°c";
    //     document.querySelector(".humidity").innerHTML = "--" + "%";
    //     document.querySelector(".wind").innerHTML = "--" + "Km/h";
    // }
    else {

        console.log(data);
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png"
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png"
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png"
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png"
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png"
                break;

            default:
                break;
        }
    }
}

searchBtn.addEventListener("click", () => {
    console.log(searchBox.value);
    if (searchBox.value) checkWeather(searchBox.value);
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (searchBox.value) checkWeather(searchBox.value);
    }
})

window.onload(checkWeather("New York"))