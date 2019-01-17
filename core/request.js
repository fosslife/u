'use strict';

const axios = require('axios');
const {apiKey} = require('../config');
const headers = require('./headers');

/**
 * @param {string} url url to fetch
 * @param {string} method HTTP method
 * @param {object} extra optional extra object
 * @param {spinner} spinner spinner instance
 * @returns {Promise} Axios promise object
 */
const fileRequest = (url, method, extra, spinner) => {
    return axios({
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
};

/**
 * @param {string} url url to fetch
 * @param {string} method HTTP method
 * @param {object} extra optional extra object
 * @param {spinner} spinner spinner instance
 * @returns {Promise} Axios promise object
 */
const urlRequest = (url, method, extra, spinner) => {
    return axios({
        url,
        method,
        headers: headers(apiKey),
        data: extra,
        onUploadProgress: progress => {
            spinner.text = `Uploading ${Math.round(
                progress.percent * 100
            )}%...`;
        },
    });
};

/**
 * A reusable wrapper around got to request
 * the different URLs in future. Turning
 * eslint off for max-params rule for now,
 * need to figure of how to detach spinner
 * logic from request without
 * @param {string} url URL to fetch
 * @param {string} method HTTP method
 * @param {string} type Type or request - file or url
 * @param {object} extra extra required metadata, just incase
 * @param {spinner} spinner Spinner Instance
 * @returns {string} response
 */
/* eslint-disable max-params */
const request = (url, method, type, extra, spinner) => {
    return type === 'url'
        ? urlRequest(url, method, extra, spinner)
        : fileRequest(url, method, extra, spinner);
};

module.exports = request;
