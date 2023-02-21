import express from "express"
import mongoose from  'mongoose'
import cors from 'cors';
import * as Controller from './api/Controller.js'

const PORT = process.env.PORT || 80

const DB_URL =
  'mongodb+srv://admin:admin@scoreboard.1vgh3xq.mongodb.net/scoreboard?retryWrites=true&w=majority'
mongoose.set('strictQuery', false)
mongoose.connect(DB_URL)
  .then(() => {
    console.log('bd - ok')
  })
  .catch((err) => console.log('DB error', err));

const app = express()
app.use(express.json());
app.use(cors());
app.use('/score', Controller.getPlayers)
app.use(express.json())
app.use(express.static('public'));


app.listen(PORT, () => console.log('Server started on PORT: ' + PORT))
export default app
