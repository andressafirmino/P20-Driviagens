import { Router } from "express";

const travelsRouter = Router();

travelsRouter.post("/cities", funcao);
travelsRouter.post("/flights", funcao);
travelsRouter.post("/travels", funcao);
travelsRouter.get("/flights", funcao);

export default travelsRouter;