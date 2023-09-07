import httpStatus from "http-status";
import travelsRepository from "../repositories/travels.repository.js";

async function postCity(name) {
    const city = await travelsRepository.checkCity(name);
    if (city.length !== 0) throw {type: "conflict"};
    const addCity = await travelsRepository.postCity(name);  
}

async function postFlight(origin, destination, date) {
    return travelsRepository.postFlight(origin, destination, date)
}

const travelsService = {
    postCity,
    postFlight
}

export default travelsService;