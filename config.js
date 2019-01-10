'use strict';

const domain = process.env.SPRK_SERVER_URL;
const apiKey = process.env.SPRK_API_KEY;
const verify = require('./core/base');

const config = () => {
    const success = verify(domain, apiKey);
    return (
        success && {
            domain,
            apiKey,
        }
    );
};

module.exports = config();
