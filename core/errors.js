const errorHandler = (error, spinner) => {
    if (error.statusCode === 400)
        spinner.fail('Bad request, often due to missing parameter.');
    else if (error.statusCode === 401)
        spinner.fail('No valid API key provided');
    else if (error.statusCode === 404)
        spinner.fail("The requested resource doesn't exists");
    else spinner.fail('Unknown error', error.message);
}

module.exports = errorHandler;
