'use strict';

/**
 * A wrapper to return prepared hearder
 * for the request
 * @param {string} k api-key
 * @param {length} l formdata boundry length
 * @returns {object} header object
 */
const headers = (k, l = undefined) => {
    const headerObj = {
        'api-key': k,
    };

    if (l) {
        headerObj['Content-Type'] = `multipart/form-data; boundary=${l}`;
    }
    return headerObj;
};

module.exports = headers;
