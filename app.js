if (process.env.NODE_END !== "production"){
    require('dotenv').config();
}


const express = require('express')
const app = express()
const ejsMate = require('ejs-mate')
const path = require('path')
const bodyParser = require('body-parser')


app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', require('./routes/home'))
app.use('/dashboard1', require('./routes/dashboard1/home'))

// app.get('/', async (req,res) => {
//     console.log('home route')
//     res.render('home')
// })

app.listen(process.env.PORT || 7050, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})