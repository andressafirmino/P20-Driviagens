import joi from "joi";

export const postCitySchema = joi.object({
	name: joi.string().min(2).max(50).required()
})

export const postFlightShema = joi.object({
	origin: joi.number().positive().required(),
	destination: joi.number().positive().required(),
	date: joi.date().required()
})

export const postTravelShema = joi.object({
	passengerId: joi.number().positive().required(),
	flightId: joi.number().positive().required()
})