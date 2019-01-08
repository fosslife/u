'use strict';

/**
 * a wrapper to return prepared hearder
 * for the request
 * @param {string} k api-key
 * @param {length} l formdata boundry length
 */
const headers = (k, l) => {
    return {
        'Content-Type': `multipart/form-data; boundary=${l}`,
        'api-key': k,
    }
}

module.exports = headers;
