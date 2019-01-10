'use strict';
const meow = require('meow');
/**
 * Prepare help menu message
 * @returns {object} meow config
 */
const helpmsg = () => {
    return meow(
        `
Usage
$ up <file> …
$ up -u <url> …
$ up -u <url> -c <custom> …
Examples
  $ up strangers.mp3                        # => share the song you love with everyone
  $ up config.js                            # => share your ricing files
  $ up -u https://sprk.pw/                  # => share the sites you love
  $ up -u https://eminem.com -c 'em'        # => with custom url support
`,
        {
            flags: {
                help: {
                    alias: 'h',
                },
                version: {
                    alias: 'v',
                },
                url: {
                    alias: 'u',
                    type: 'string',
                },
                custom: {
                    alias: 'c',
                    type: 'string',
                },
            },
        }
    );
};

module.exports = helpmsg;
