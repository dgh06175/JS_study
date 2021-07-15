const API_KEY = "b30cc6556ff20d51611f568ec182f440";
function onGeoOk(pos) {
    alert("found you.");
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        console.dir(document);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });// JSÍ∞? url?ùÑ ?ó∂
}
function onGeoError() {
    alert("founding you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);