import joi from "joi";

export const postPassengerSchema = joi.object({
	firstName: joi.string().min(2).max(100).required(),
	lastName: joi.string().min(2).max(100).required()
})