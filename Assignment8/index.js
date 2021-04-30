const  express = require('express')
const app = express()
const mongoose = require('mongoose')
const seedDB = require('./seedDB')
const path = require('path')
const methodOverride = require('method-override')

const blogRoutes = require('./routes/blogs');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/blogApp', {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => {
    console.log("DB CONNECTED!!")
})
.catch(err => {
    console.log("There is some error with database!!")
    console.log(err)
})

// seedDB()

app.use(blogRoutes)

app.listen(3000, (req, res) => {
    console.log('App is listening at port 3000')
})