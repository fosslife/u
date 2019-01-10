'use strict';

const {createReadStream} = require('fs');
const FormData = require('form-data');
const {copy} = require('copy-paste');
const ora = require('ora');
const {domain} = require('../config');
const err = require('./errors');
const request = require('./got');
const die = require('./die');

/**
 * Take the filename and process
 * it further for uploading
 * @param {string} file filename
 */
const upload = async file => {
    const form = new FormData();
    const fileStream = createReadStream(file);
    fileStream.on('error', err => {
        if (err.code === 'ENOENT') {
            spinner.fail('Cannot find the specified file');
            die();
        } else {
            spinner.fail('Unknown Error');
            die();
        }
    });
    form.append('file', fileStream);

    const spinner = ora(`Uploading…`).start();

    try {
        const response = await request(domain, 'POST', form, spinner);
        if (response.statusCode === 200) {
            spinner.stop();
            console.log(`${response.body}`);
            copy(response.body);
        }
    } catch (error) {
        err(error, spinner);
    }
};

module.exports = upload;
