import express from 'express'
import dotenv from 'dotenv'
import connectDB from './services/mongodb/connectDB'
dotenv.config()




const port = process.env.PORT || 3003
const app = express()
connectDB()

app.listen(port, (req, res) => {
    console.log('Server listening at PORT ${port}')
})
