const APIKey = "e10bf7aea9a205381799dfbc139a36ed";

function onGeoOk(location) {
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKey}&units=metric`;
    console.log(`You live in ${lat} , ${lng}`);
    fetch(api)
      .then((response) => response.json())
      .then((data) =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });

}

function onGeoError() {
    alert("위치 파악 불가로 날씨정보 불가");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);