#!/usr/bin/env node
'use strict';
const meow = require('meow');
const die = require('./core/die');
const upload = require('./core/upload');

const cli = meow(
  `
	Usage
    $ up <file> …

  Examples
	  $ up strangers.mp3
	  $ up sigrid.png
`,
  {
    flags: {
      help: {
        alias: 'h',
      },
      version: {
        alias: 'v',
      },
    },
  }
);

const file = cli.input[0];

process.on('SIGINT', () => {
  die('\n\nOperation aborted!');
});

(async () => {
  if (file) {
    upload(file);
  } else {
    die('Specify a file to upload...');
  }
})();
