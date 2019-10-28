const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('../public/js/utils/geocode')
const forecast = require('../public/js/utils/forecast')


//set api keys
const darkSkyAPI = '8c802d90485481ef445923df9294ddb1'
const mapBoxAPI = 'pk.eyJ1Ijoia3Jpc2huYWM3IiwiYSI6ImNrMjkwdzd5ODJlcjUzbm5yMGkxb3QydGkifQ.RoIcB1s7ww9JV-yRxm55dQ'

const app = express()
const port = process.env.PORT || 3000

//build paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup handlebars and views location
app.set('views',viewsPath)
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)

//setup static path
app.use(express.static(publicDirectoryPath))


//config routes
app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'Krishna Balaga'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Krishna Balaga'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
       title:'The Help Page',
       message: 'A Quick Help Message',
       name:'Krishna Balaga' 
    })
})

//creating a weather api that responds with a weather forecast json
app.get('/weather',(req,res) =>{

    if(!req.query.location){
        return res.send({
            error: 'you must send in a query location to fetch weather'
        })
    }
    geocode(mapBoxAPI,req.query.location,(error,{latitude,longitude,location}={}) =>{
        if (error){
            return res.send({
                error:error
            })
        } else{
            forecast(darkSkyAPI,latitude,longitude,(error,data)=>{
                if(error){
                    return res.send({
                        error:error
                    })
                }else{
                    return res.send ({
                        location:location,
                        weather: data
                    })
                }
                
        })
     }
    })
})


app.get('/help/*',(req,res) => {
    res.render('404',{
        message: 'Help article not found',
        name : 'Krishna Balaga',
        title: '404 Not Found'

    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        message: 'Page not found',
        name:'Krishna Balaga',
        title: '404 not found'
    })
})


//start up server
app.listen(port,() =>{
    console.log('Server is up at'+port)
})
