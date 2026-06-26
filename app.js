import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import './db.js'
import { engine } from 'express-handlebars' 

const app = express()
const port = process.env.PORT
console.log(`Port for express ${port}`)

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get("/", (req,res)=>{
    res.render("index", {
        title : "Home",
        message : "I built this apps using expres and handlebars, mongodb as my database.",
        author : "mariodenny on github"
    })
})

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})