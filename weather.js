let temp = document.querySelector("#temp");
let description = document.querySelector("#description");
let icon = document.querySelector("#icon-box");
let icoImg = document.createElement("img");

function getWeather() {
    return new Promise(function (resolve, reject) {
        const req = new XMLHttpRequest();
        const apiUrl =
            "https://api.openweathermap.org/data/2.5/weather?lat=53.15&lon=18&appid=eb8699e9e158d2e53060d0c202d2de6d&units=metric&lang=pl";
        req.open("GET", apiUrl);
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(req.responseText);
            }
        }
        req.onerror = function () {
            reject(new Error("Network error"));
        }
        req.send();
    });
}

getWeather()
    .then(data => {
        let json = JSON.parse(data);
        console.log(json);
        temp.innerHTML = `${Math.round(json.main.temp)} &#8451;`;
        let weatherJSON = json.weather[0];
        icoImg.src = `https://openweathermap.org/img/wn/${weatherJSON.icon}@2x.png`;
        icon.append(icoImg);
        description.innerHTML = weatherJSON.description;
    });