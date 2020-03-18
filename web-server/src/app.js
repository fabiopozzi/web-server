const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cielo libero da nuvole. Giornata soleggiata. Temperature in salita fino a 18 C',
        location: 'Novara'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})