const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    const queryString = 'http://localhost:3000/weather?address=' + location

    messageOne.textContent = 'loading, please wait...'
    messageTwo.textContent = ''

    fetch(queryString).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = 'Error: '+ data.error
            } else {
                messageOne.textContent = 'Location: ' + data.location
                messageTwo.textContent = 'Forecast: ' + data.forecast

            }
        })
    })

})