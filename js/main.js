fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=Samara,RU&appid=b898573b7c51bba91d9c7661ffff6b52'
)
.then(function (resp) {
    return resp.json()
})

.then(function (data) {
    console.log(data)
    document.querySelector('.weather--city').textContent = data.name
    document.querySelector('.date').innerHTML = `${new Date(data.dt*1000)
.getDay() === new Date().getDay() ? 'Now' : new Date(data.dt*1000).toLocaleString('en', {
            weekday: "long"})}, ${new Date(data.dt*1000).toLocaleString('en', {
                month: "short",
                day: "numeric"
            })}`
    document.querySelector('.temp_day').innerHTML = `${Math.round(data.main.temp-273)}&deg`
    document.querySelector('.cloud').innerHTML = `${data.weather[0]['description']}`
    console.log(document.querySelector('.cloud'))
    document.querySelector('.weather--item__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}.png">`
    document.querySelector('.wind').innerHTML = `${data.wind.deg}`
    document.querySelector('.wind_speed').innerHTML = `${data.wind.speed} m/s`
})