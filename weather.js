//Complete the Weather API Backend part using openweathermap api
var apiKey = '0e8686a4457db2f6776cadacd9e00e78';
var msg = document.getElementById('msg')


function getData() {
    var input = document.getElementById('City').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('p1').innerHTML = "Temp:" + data.main.temp;
            document.getElementById('p2').innerHTML = "Temp:" + data.name;
            var icon = 'https://api.openweathermap.org/img/w/' + data.weather[0].icon + ".png";
            document.getElementById('icon').src = icon;
        })
        .catch(() => {
            msg.textContent = "Please Search for a valid city"
        })
}