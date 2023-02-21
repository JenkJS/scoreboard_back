const  Router = require("express");
const  Controller = require("./Controller.js");

const router = new Router();

router.get("/players", Controller.getPlayers);
router.get("/", Controller.getHome)

module.exports = router;
