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
if (file) {
    upload(file);
} else {
    die('Specify a file to upload...');
}
