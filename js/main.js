fetch('http://api.openweathermap.org/data/2.5/weather?q=Samara,RU&appid=6c585e3d722d844a966fd33110bbbc21');

    .then(function (resp) {
        return resp.json()
    })

    .then(function (data) {
        //console.log(data)
        document.querySelector('.weather--city').textContent = data.name
        document.querySelector('.date').innerHTML = `${new Date(data.dt*1000)
.getDay() === new Date().getDay() ? 'Now' : new Date(data.dt*1000).toLocaleString('en', {
            weekday: "long"})}, ${new Date(data.dt*1000).toLocaleString('en', {
                month: "short",
                day: "numeric"
            })}`
        document.querySelector('.temp_day').innerHTML = `${Math.round(data.main.temp-273)}&deg`
        document.querySelector('.cloud').innerHTML = `${data.weather[0]['description']}`
        document.querySelector('.weather--item__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`

        let windDeg = data.wind.deg
        let wind = ''
        switch (true) {
            case windDeg == 0:
                wind = "North"
                break
            case windDeg == 90:
                wind = "East"
                break
            case windDeg == 180:
                wind = "South"
                break
            case windDeg == 270:
                wind = "West"
                break
            case windDeg > 0 && windDeg < 90:
                wind = "NorthEast"
                break
            case windDeg > 90 && windDeg < 180:
                wind = "SouthEast"
                break
            case windDeg > 180 && windDeg < 270:
                wind = "SouthWest"
                break
            default:
                wind = "NorthWest"
                break
        }

        document.querySelector('.wind').innerHTML = `${wind}, ${data.wind.speed} m/s`
    })