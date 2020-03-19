const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define path for Express configuration
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to use
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
        message: 'This page explains how to use the website',
        name: 'Fabio Pozzi'
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