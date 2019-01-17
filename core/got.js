'use strict';

const got = require('got');
const { apiKey } = require('../config');
const headers = require('./headers');

/**
 * A reusable wrapper around got to request
 * the different URLs in future
 * @param {string} url URL to fetch
 * @param {string} method HTTP method
 * @param {formdata} form FormData Object
 * @param {spinner} spinner Spinner Object
 */
const request = async (url, method, form, spinner) => {
    const header = form._boundary && headers(apiKey, form._boundary) || headers(apiKey);
    const response = await got(url, {
        method,
        headers: header,
        body: form,
    })
    // .on('uploadProgress', progress => {
    //     spinner.text = `Uploading ${Math.round(progress.percent * 100)}%...`;
    // });

    return response;
}

module.exports = request;
