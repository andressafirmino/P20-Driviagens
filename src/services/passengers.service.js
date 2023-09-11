import { manyResultsError } from "../errors/manyResults.js";
import passengersRepository from "../repositories/passengers.repository.js";

async function postPassenger(firstName, lastName) {
    return passengersRepository.postPassenger(firstName, lastName);
}

async function getPassengerTravel(name) {
    const travels = await passengersRepository.getPassengerTravel(name); 
    if(travels.rows.length > 10) throw manyResultsError();  
    return travels;
}

const passengersService = {
    postPassenger,
    getPassengerTravel
}

export default passengersService;