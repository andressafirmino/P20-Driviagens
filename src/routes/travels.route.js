import { Router } from "express";
import { postCity } from "../controllers/travels.controller.js";

const travelsRouter = Router();

travelsRouter.post("/cities", postCity);
//travelsRouter.post("/flights", funcao);
//travelsRouter.post("/travels", funcao);
//travelsRouter.get("/flights", funcao);

export default travelsRouter;