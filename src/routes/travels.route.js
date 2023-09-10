import { Router } from "express";
import { getFlights, postCity, postFlight, postTravel } from "../controllers/travels.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { postCitySchema, postFlightShema, postTravelShema } from "../schemas/travels.schema.js";

const travelsRouter = Router();

travelsRouter.post("/cities", validateSchema(postCitySchema), postCity);
travelsRouter.post("/flights", validateSchema(postFlightShema), postFlight);
travelsRouter.post("/travels", validateSchema(postTravelShema), postTravel);
travelsRouter.get("/flights", getFlights);

export default travelsRouter;