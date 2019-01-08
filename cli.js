#!/usr/bin/env node
'use strict';
const meow = require('meow');
const die = require('./core/die');
const upload = require('./core/upload');
const helpmsg = require('./core/help');

const cli = meow(helpmsg('message'), helpmsg('config'));

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