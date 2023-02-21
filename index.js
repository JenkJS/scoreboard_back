const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const Player = require('./api/Player')
const PORT = process.env.PORT || 5001
// mongodb+srv://admin:admin@scoreboard.1vgh3xq.mongodb.net/scoreboard?retryWrites=true&w=majority
// const DB_URL = 'mongodb+srv://admin:admin@scoreboard.1vgh3xq.mongodb.net/scoreboard?retryWrites=true&w=majority'
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log('bd - ok')
  })
  .catch((err) => console.log('DB error', err));

const app = express()
app.use(express.json());
app.use(cors());
app.use('/score', async  (req,res)=> {
  try {
    const posts = await Player.find();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить тэги',
    })
  }
})
app.use(express.json())
app.use(express.static('public'));


app.listen(PORT, () => console.log('Server started on PORT: ' + PORT))
