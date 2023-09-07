import httpStatus from "http-status";
import travelsService from "../services/travels.service.js";

export async function postCity(req, res) {
    const {name} = req.body;
    try {
        await travelsService.postCity(name);
        res.sendStatus(httpStatus.CREATED);
        } catch (e) {
        if(e.type === "conflict") return res.sendStatus(httpStatus.CONFLICT);
        res.sendStatus(500);
    }
}

export async function postFlight(req, res) {
    const {origin, destination, date} = req.body;
    try {
        await travelsService.postFlight(origin, destination, date);
        res.sendStatus(httpStatus.CREATED);
        } catch (e) {
        
    }
}

export async function postTravel(req, res) {
    const {passengerId, flightId} = req.body;
}

export async function getFlights(req, res) {

}