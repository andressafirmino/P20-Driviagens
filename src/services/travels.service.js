import travelsRepository from "../repositories/travels.repository.js";

async function postCity(name) {
    return travelsRepository.postCity(name);
}

const travelsService = {
    postCity
}

export default travelsService;