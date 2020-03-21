const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/af375ff38c946c66aec4e47aa88fe561/' + latitude + ',' + longitude + '?units=ca&lang=it'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Impossibile collegarsi al servizio meteo', undefined)
        } else if (body.error) {
            callback('Impossibile trovare luogo', undefined)
        } else {
            const temp = body.currently.temperature
            const rain_chance = body.currently.precipProbability
            const hum = Number(body.currently.humidity) * 100
            const wind = body.currently.windSpeed
            callback(undefined, `Al momento ci sono ${temp}°C, umidità ${hum}%, vento ${wind} km/h. Le probabilità di pioggia sono ${rain_chance}%.`)
        }
    })
}

module.exports = forecast