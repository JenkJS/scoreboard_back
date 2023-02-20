import PlayerService from './PlayerService.js'

class Controller {
  async getPlayers(req, res) {
    try {
      const players = await PlayerService.getPlayers()
      return res.json(players)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new Controller()
