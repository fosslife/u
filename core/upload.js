'use strict';

const FormData = require('form-data');
const { createReadStream } = require('fs');
const ora = require('ora');
const err = require('./errors');
const request = require('./got');
const { domain } = require('../config');
const die = require('./die');

const upload = async file => {

    const form = new FormData();
    const fileStream = createReadStream(file);
    fileStream.on('error', (err) => {
        if (err.code === 'ENOENT') {
            spinner.fail('Cannot find the specified file')
            die();
        } else {
            spinner.fail('Unknown Error')
            die();
        }
    })
    form.append('file', fileStream);

    const spinner = ora(`Uploading…`).start();

    try {
        const response = await request(domain, 'POST', form, spinner);
        if (response.statusCode === 200) {
            spinner.stop();
            console.log(`${response.body}`);
        }
    } catch (error) {
        err(error, spinner)
    }
}

module.exports = upload