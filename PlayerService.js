import Player from "./Player.js";


class PlayerService {
    async getPlayers() {
        return await Player.find()
    }
}

export  default  new PlayerService();
