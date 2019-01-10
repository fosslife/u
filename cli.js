#!/usr/bin/env node
'use strict';
const die = require('./core/die');
const upload = require('./core/upload');
const helpmsg = require('./core/help');

const cli = helpmsg();

const file = cli.input[0];

/**
 * Handle graceful termination
 */
process.on('SIGINT', () => {
    die('\n\nOperation aborted!');
});

/**
 * Uplaod file if given
 */
if (file && cli.flags.url) {
    die('Specify either URL to shorten or file to upload')
} else if (file) {
    upload(file);
} else if (cli.flags.url) {
    console.log('url')
} else if (!file && !cli.flags.url) {
    die('Specify a file to upload...');
}
