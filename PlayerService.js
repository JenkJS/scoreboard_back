const Player  = require("./Player.js");


class PlayerService {
    async getPlayers() {
        return await Player.find()
    }
}

module.exports = new PlayerService();
