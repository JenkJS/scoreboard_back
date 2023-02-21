import mongoose from "mongoose";

const Player = new mongoose.Schema({
        nickname: {type: String, require: true},
        _id: {type: Number, require: true},
        kill: {type: Number, require: true},
        death: {type: Number, require: true},
        support: {type: Number, require: true},
        denied: {type: Number, require: true},
        friends: {type: Array, require: true},
        score: {type: Number, require: true},
        isDead: {type: Boolean, require: true},
        team: {type: Number, require: true},
        picture: {type: String, require: true}
})

export default mongoose.model('Player', Player)
