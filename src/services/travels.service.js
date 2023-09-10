import httpStatus from "http-status";
import travelsRepository from "../repositories/travels.repository.js";
import { conflictError } from "../errors/conflict.js";
import { notFoundCitiesError } from "../errors/notFoundCity.js";
import { notFoundError } from "../errors/notFound.js";

async function postCity(name) {
    const city = await travelsRepository.checkCity(name);
    if (city.length !== 0) throw conflictError("Cidade");
    await travelsRepository.postCity(name);  
    return;
}

async function postFlight(origin, destination, date) {

    const cities = await travelsRepository.checkCities(origin, destination);
    if (cities.count !== '2') throw notFoundCitiesError(cities.count);
    await travelsRepository.postFlight(origin, destination, date);
    return;
}

async function postTravel(passengerId, flightId) {
    const passenger = await travelsRepository.checkPassenger(passengerId);
    if (passenger.length === 0) throw notFoundError("Passageiro");
    const flight = await travelsRepository.checkFlight(flightId);
    if (flight.length === 0) throw notFoundError("Voo");
    await travelsRepository.postTravel(passengerId, flightId);
    return;
}

const travelsService = {
    postCity,
    postFlight,
    postTravel
}

export default travelsService;