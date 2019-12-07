fetch('https://api.openweathermap.org/data/2.5/weather?q=Samara,RU&appid=6c585e3d722d844a966fd33110bbbc21')

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
        document.querySelector('.weather--item__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`

        // перевел направление ветра в градусах, в буквенные значения на англ.
        let windDeg = data.wind.deg
        let wind = ''
        switch (true) {
            case windDeg <= 10 && windDeg >= 370:
                wind = "North"
                break
            case windDeg >= 80 && windDeg <= 100:
                wind = "East"
                break
            case windDeg >= 170 && windDeg <= 190:
                wind = "South"
                break
            case windDeg >= 260 && windDeg <= 280:
                wind = "West"
                break
            case windDeg > 10 && windDeg < 80:
                wind = "NorthEast"
                break
            case windDeg > 100 && windDeg < 170:
                wind = "SouthEast"
                break
            case windDeg > 190 && windDeg < 260:
                wind = "SouthWest"
                break
            default:
                wind = "NorthWest"
                break
        }

        document.querySelector('.wind').innerHTML = `${wind}, ${data.wind.speed} m/s`
    })