'use strict';
const ora = require('ora');
const {domain} = require('../config');
const request = require('./request');
const err = require('./errors');

const url = async (url, custom = false) => {
    const spinner = ora(`Uploading…`).start();
    try {
        const response = await request(
            domain,
            'POST',
            'url',
            {url, custom},
            spinner
        );
        spinner.stop();
        console.log(`${response.data}`);
    } catch (error) {
        err(error, spinner);
    }
};

module.exports = url;
