import { Router } from "express";
import passengersRouter from "./passengers.route.js";
import travelsRouter from "./travels.route.js";

const router = Router();

router.use(passengersRouter);
//router.use(travelsRouter);

export default router;