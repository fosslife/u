'use strict';
/**
 * Takes an error code and returns
 * appropriate message assicated 
 * with it. 
 * @param {number} error Response code
 */
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

/**
 * Error handling for `spinner` to 
 * stop spinning
 * @param {error} error Error object
 * @param {spinner} spinner Spinner object by ora
 */
const errorHandler = (error, spinner) => {
    spinner.fail(errorCode(error.statusCode))
}

module.exports = errorHandler;
