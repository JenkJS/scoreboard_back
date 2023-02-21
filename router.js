import  Router from "express";
import Controller from "api/Controller.js";

const router = new Router();

router.get("/players", Controller.getPlayers);
router.get("/", Controller.getHome)

module.exports = router;
