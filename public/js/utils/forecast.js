const request = require('request')

const forecast = (api,lat,long,callback) =>{
    const url = 'https://api.darksky.net/forecast/'+api+'/'+encodeURIComponent(lat)+','+encodeURIComponent(long)+'?units=si'
    request({url,json:true},(error,{body} = {})=>{
        if(error){
                    callback('Unable to connect to weather api right now',undefined)
                } else if(body.error){
                    callback('Unable to find location',undefined)
                } else{
                    callback(undefined,body.daily.data[0].summary+'It is currently '+body.currently.temperature+
                    ' degrees out there and there is a '+body.currently.precipProbability+'% chance of rain.')
                } 
    })
}

module.exports = forecast