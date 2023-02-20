import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
const PORT = process.env.PORT || '5000'
const app = express()

app.use(express.json())
app.use(express.static('public'));
app.use('/api', router)
const DB_URL =
  'mongodb+srv://admin:admin@scoreboard.1vgh3xq.mongodb.net/scoreboard?retryWrites=true&w=majority'

async function startApp() {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(DB_URL).then(() => {
      console.log('bd - ok')
    })
    app.listen(PORT, () => console.log('Server started on PORT: ' + PORT))
  } catch {}
}
startApp()
