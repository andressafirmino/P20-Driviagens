import httpStatus from "http-status";
import travelsService from "../services/travels.service.js";
import { conflictCitiesError } from "../errors/conflictCities.js";

export async function postCity(req, res) {
    const { name } = req.body;

    await travelsService.postCity(name);
    res.sendStatus(httpStatus.CREATED);
}

export async function postFlight(req, res) {
    const { origin, destination, date } = req.body;

    if (origin === destination) throw conflictCitiesError();
    await travelsService.postFlight(origin, destination, date);
    res.sendStatus(httpStatus.CREATED);
}

export async function postTravel(req, res) {
    const { passengerId, flightId } = req.body;

    await travelsService.postTravel(passengerId, flightId);
    res.sendStatus(httpStatus.CREATED);
}

export async function getFlights(req, res) {
    const {origin, destination, "bigger-date": biggerDate, "smaller-date": smallerDate} = req.query;

    const flights = await travelsService.getFlights(origin, destination, biggerDate, smallerDate);
    res.send(flights);
}