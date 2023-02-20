import Router from "express";
import Controller from "./Controller.js";

const router = new Router();

router.get("/players", Controller.getPlayers);

export default router;
