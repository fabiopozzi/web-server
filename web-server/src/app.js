const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello express!</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: "Fabio",
        age: 35
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>This is the about page.</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cielo libero da nuvole. Giornata soleggiata. Temperature in salita fino a 18 C',
        location: 'Novara'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})