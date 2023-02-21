const PlayerService = require("./PlayerService.js");

class Controller {
  async getHome(req, res) {
    try {
        return res.send('Hey this is my API running 🥳')
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async getPlayers(req, res) {
    try {
      const players = await PlayerService.getPlayers()
      return res.json(players)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

module.exports = new Controller()
