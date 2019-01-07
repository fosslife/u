'use strict';

const got = require('got');
const { apiKey } = require('../config');
const headers = require('./headers');

const request = async (url, method, form, spinner) => {
    const response = await got(url, {
        method,
        headers: headers(apiKey, form._boundary),
        body: form,
    }).on('uploadProgress', progress => {
        spinner.text = `Uploading ${Math.round(progress.percent * 100)}%...`;
    });

    return response;
}

module.exports = request;
