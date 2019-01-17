'use strict';

const die = require('./die');

const allgood = (domain, apiKey) => {
    if (!domain) {
        die(
            'Server URL not available, Please set SPRK_SERVER_URL env variable.'
        );
    }
    if (!apiKey) {
        die('Server API key not available, set SPRK_API_KEY env variable.');
    }
    return true;
};

module.exports = allgood;
