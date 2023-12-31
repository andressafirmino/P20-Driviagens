import httpStatus from "http-status";
import travelsRepository from "../repositories/travels.repository.js";
import { conflictError } from "../errors/conflict.js";
import { notFoundCitiesError } from "../errors/notFoundCity.js";
import { notFoundError } from "../errors/notFound.js";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br.js';
import 'dayjs/locale/en.js';
import { conflictCitiesError } from "../errors/conflictCities.js";
import { dateSchema } from "../schemas/travels.schema.js";
import { dateFormatError } from "../errors/dateFormat.js";
import { smallerError } from "../errors/smaller.js";
import { badRequestError } from "../errors/badRequest.js";

async function postCity(name) {
    const city = await travelsRepository.checkCity(name);
    if (city.length !== 0) throw conflictError("Cidade");
    await travelsRepository.postCity(name);
    return;
}

function formatDateToYYYYMMDD(date) {
    const parts = date.split('-');
    if (parts.length === 3) {
      const [day, mounth, year] = parts;
      return `${year}-${mounth}-${day}`;
    }
    return null; 
  }

async function postFlight(origin, destination, date) {

    console.log(date)
    const formatDate = formatDateToYYYYMMDD(date);
    console.log(formatDate)
    if (origin === destination) throw conflictCitiesError();
    const cities = await travelsRepository.checkCities(origin, destination);
    if (cities.count !== '2') throw notFoundCitiesError(cities.count);
    console.log(formatDate)
    await travelsRepository.postFlight(origin, destination, formatDate);
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
function dateFormat(date) {
    const formatDate = dayjs(date).locale('pt-br').format('DD-MM-YYYY');
    return formatDate;
}

async function getFlights(origin, destination, smallerDate, biggerDate) {
 const{error: smallerDateError} = dateSchema.validate(smallerDate);
 const{error: biggerDateError} = dateSchema.validate(biggerDate);
 
    if(smallerDateError || biggerDateError) throw dateFormatError();
    if(smallerDate && !biggerDate || !smallerDate && biggerDate) throw badRequestError(smallerDate ? "data final" : "data inicial")
    if(biggerDate < smallerDate) throw smallerError();
    const formatSmaller = formatDateToYYYYMMDD(smallerDate);
    const formatBigger = formatDateToYYYYMMDD(biggerDate);
    const flights = await travelsRepository.getFlights(origin, destination, formatSmaller, formatBigger);    

    const dateUpdate = flights.rows.map(flight => ({
        ...flight,
        date: dateFormat(flight.date)
    }))
    return dateUpdate;
}

const travelsService = {
    postCity,
    postFlight,
    postTravel,
    getFlights
}

export default travelsService;