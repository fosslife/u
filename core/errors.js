'use strict';

const errorCode = error => {
    switch (error) {
        case 400:
            return `Bad request, often due to missing parameter.`;
        case 401:
            return `No valid API key provided`;
        case 404:
            return `The requested resource doesn't exists`;
        default:
            return `Unknown error`;
    }
}

const errorHandler = (error, spinner) => {
    spinner.fail(errorCode(error.statusCode))
}

module.exports = errorHandler;
