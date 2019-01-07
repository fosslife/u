'use strict';

const got = require('got');
const { apiKey } = require('../config');

const request = async (url, method, form, spinner) => {
    const response = await got(url, {
        method,
        headers: {
            'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
            'api-key': apiKey,
        },
        body: form,
    }).on('uploadProgress', progress => {
        spinner.text = `Uploading ${Math.round(progress.percent * 100)}%...`;
    });

    return response;
}

module.exports = request;
