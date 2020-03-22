const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    const queryString = '/weather?address=' + location

    messageOne.textContent = 'loading, please wait...'
    messageTwo.textContent = ''

    fetch(queryString).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = 'Errore: '+ data.error
            } else {
                messageOne.textContent = 'Luogo: ' + data.location
                messageTwo.textContent = 'Previsione: ' + data.forecast

            }
        })
    })

})