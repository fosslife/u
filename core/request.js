'use strict';

const axios = require('axios');
const {apiKey} = require('../config');
const headers = require('./headers');

/**
 * 
 * @param {string} url url to fetch
 * @param {string} method HTTP method
 * @param {object} extra optional extra object
 * @param {spinner} spinner spinner instance
 */
const fileRequest = async (url, method, extra, spinner) => {
    return await axios({
        url,
        method,
        headers: headers(apiKey, extra.form._boundary),
        data: extra.form,
        onUploadProgress: progress => {
            spinner.text = `Uploading ${Math.round(
                progress.percent * 100
            )}%...`;
        },
    });
}

/**
 * A reusable wrapper around got to request
 * the different URLs in future
 * @param {string} url URL to fetch
 * @param {string} method HTTP method
 * @param {string} type Type or request - file or url
 * @param {object} extra extra required metadata, just incase
 * @param {spinner} spinner Spinner Instance
 */
const request = (url, method, type, extra, spinner) => {
    if ( type === 'url') {

    } else {
        return fileRequest(url, method, extra, spinner);
    }
};

module.exports = request;
