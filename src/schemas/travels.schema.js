import joi from "joi";
import joiDate from "@joi/date";

export const postCitySchema = joi.object({
	name: joi.string().min(2).max(50).required()
})

const JoiExtended = joi.extend(joiDate);

export const postFlightShema = joi.object({
	origin: joi.number().positive().required(),
	destination: joi.number().positive().required(),
	date: JoiExtended.date().greater(new Date()).format("DD-MM-YYYY").required()
})

export const postTravelShema = joi.object({
	passengerId: joi.number().positive().required(),
	flightId: joi.number().positive().required()
})