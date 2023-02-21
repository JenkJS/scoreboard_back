const express = require("express");
const mongoose = require("mongoose");
const router = require("./router.js");
const cors = require("cors");
const PORT = process.env.PORT || 5001
const app = express()

app.use(express.json())
app.use(express.static('public'));
app.use('/api', router)
app.use(cors())
// const DB_URL =
//   'mongodb+srv://admin:admin@scoreboard.1vgh3xq.mongodb.net/scoreboard?retryWrites=true&w=majority'

async function startApp() {
  try {
    await mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.DB_URL).then(() => {
      console.log('bd - ok')
    })
    app.listen(PORT, () => console.log('Server started on PORT: ' + PORT))
  } catch(e) {
    console.log('Err', + e)
  }
}
startApp()
module.exports = app
