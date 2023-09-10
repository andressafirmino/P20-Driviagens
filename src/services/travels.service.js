import httpStatus from "http-status";
import travelsRepository from "../repositories/travels.repository.js";
import { conflictError } from "../errors/conflict.js";
import { notFoundCitiesError } from "../errors/notFoundCity.js";

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

const travelsService = {
    postCity,
    postFlight
}

export default travelsService;