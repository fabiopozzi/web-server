const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZmFiaW9wb3p6aSIsImEiOiJjazd0N3drdWswa3F0M25wY2EyZ2NkcnN0In0.zA-_HSmW1CYEnKMsY8ioQw&language=it&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Impossibile connettersi ai servizi di localizzazione', undefined)
        } else if (body.features.length === 0) {
            callback('Nessun luogo trovato. Prova un\'altra ricerca', undefined)
        } else {
            const data = {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode