function setWeather(location){
    const url = '/weather?location='+encodeURIComponent(location)
    const messageOne = document.querySelector('#message-1')
    const messageTwo = document.querySelector('#message-2')
    messageOne.textContent= 'Loading ...'
    messageTwo.textContent= ''
    fetch(url).then((response)=>{
        response.json().then(({error,location,weather}={})=>{
            if(!error){
                messageOne.textContent = location
                messageTwo.textContent = weather
            } else{
                messageOne.textContent = error
            }
        })
    })
}

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value
    // var forecast = getWeather(location);

    // console.log(forecast.location)
    setWeather(location)
    
})