'use strict';

const axios = require('axios');
const {apiKey} = require('../config');
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
    const response = await axios({
        url,
        method,
        headers: headers(apiKey, form._boundary),
        data: form,
        onUploadProgress: progress => {
            spinner.text = `Uploading ${Math.round(
                progress.percent * 100
            )}%...`;
        },
    });
    return response;
};

module.exports = request;
