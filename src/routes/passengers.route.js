import { Router } from "express";

const passengersRouter = Router();

passengersRouter.post("/passengers", funcao);
passengersRouter.get("/passengers/travels", funcao);

export default passengersRouter;