#!/usr/bin/env node
'use strict';
const meow = require('meow');
const die = require('./core/die');
const upload = require('./core/upload');
const helpmsg = require('./core/help');
const url = require('./core/url');

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
} else if (cli.flags.url) {
  url(cli.flags.url)
} else {
  die('Specify a correct option from help...');
}