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
app.use('/dashboard2', require('./routes/dashboard2/home'))
app.use('/resizablediv', require('./routes/resizablediv/home'))
app.use('/login', require('./routes/login/home'))
app.use('/login2', require('./routes/login2/home'))
app.use('/stickyTable', require('./routes/stickyTable/home'))
app.use('/scheduling', require('./routes/scheduling/home'))
app.use('/scheduling2', require('./routes/scheduling2/home'))

// ---------------- Hotel Management ----------------
// app.use('/hotel', require('./routes/hotel/home'))

// app.get('/', async (req,res) => {
//     console.log('home route')
//     res.render('home')
// })

app.listen(process.env.PORT || 7050, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})