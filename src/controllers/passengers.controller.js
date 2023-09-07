import httpStatus from "http-status";
import passengersService from "../services/passengers.service.js";

export async function postPassenger(req, res) {
    const {firstName, lastName} = req.body;
    
    try {
        await passengersService.postPassenger(firstName, lastName);
        res.sendStatus(httpStatus.CREATED);
    } catch (e) {
        
    }
}

export async function getPassengerTravel (req, res) {

}