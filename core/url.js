'use strict';

const request = require('./got');
const ora = require('ora');
const { domain } = require('../config');

const urlshortener = async url => {
    // const spinner = ora(`Uploading…`).start();
    
    const data = {
        url
    }
    try {
        const response = await request(domain, 'POST', url)
        console.log("===", response.body);
    } catch (e) {
        console.error("<<<", e);
    }
}

module.exports = urlshortener;
