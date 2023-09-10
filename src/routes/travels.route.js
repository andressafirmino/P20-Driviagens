import { Router } from "express";
import { postCity, postFlight } from "../controllers/travels.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { postCitySchema, postFlightShema } from "../schemas/travels.schema.js";

const travelsRouter = Router();

travelsRouter.post("/cities", validateSchema(postCitySchema), postCity);
travelsRouter.post("/flights", validateSchema(postFlightShema), postFlight);
//travelsRouter.post("/travels", funcao);
//travelsRouter.get("/flights", funcao);

export default travelsRouter;