#!/usr/bin/env node
'use strict';
const { createReadStream } = require('fs');
const got = require('got');
const ora = require('ora');
const meow = require('meow');
const FormData = require('form-data');
const die = require('./core/die');
const err = require('./core/errors');

const { domain, apiKey } = require('./config');

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
    const form = new FormData();
    form.append('file', createReadStream(file));

    const spinner = ora(`Uploading…`).start();

    try {
      const response = await got(domain, {
        method: 'POST',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
          'api-key': apiKey,
        },
        body: form,
      }).on('uploadProgress', progress => {
        spinner.text = `Uploading ${Math.round(progress.percent * 100)}%...`;
      });

      if (response.statusCode === 200) {
        spinner.stop();
        console.log(`${response.body}`);
      }
    } catch (error) {
        err(error, spinner)      
    }
  } else {
    die('Specify a file to upload...');
  }
})();
