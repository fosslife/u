'use strict';
const meow = require('meow');
/**
 * prepare help menu message
 * @param {object} type 
 */
const helpmsg = type => {
    return meow(`
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
            }
        });
}

module.exports = helpmsg;
