import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
    console.log(error.message);

    if (error.type === "conflict") {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }

    if (error.type === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    if (error.type === "conflictCities") {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }

    if (error.type === "notFoundCities") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    if (error.type === "formatDate") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }
  
    if (error.type === "smaller") {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    if (error.type === "badRequest") {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    if (error.type === "manyResults") {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
}