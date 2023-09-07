import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { postPassengerSchema } from "../schemas/passengers.schema.js";
import { postPassenger } from "../controllers/passengers.controller.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(postPassengerSchema), postPassenger);
passengersRouter.get("/passengers/travels");

export default passengersRouter;