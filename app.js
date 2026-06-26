import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import './db.js'

const app = express()
const port = process.env.PORT
console.log(`Port for express ${port}`)

app.get("/", (req,res)=>{
    res.send(`Env loaded successfully! Example : ${port}`)
})

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})