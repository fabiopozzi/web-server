const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Fabio Pozzi'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Fabio Pozzi'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'This page explains how to use the website'
    })
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