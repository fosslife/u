'use strict';

/**
 * prepare help menu message
 * @param {object} type 
 */
const helpmsg = type => {
    if (type === 'message') {
        return (
    `
        Usage
        $ up <file> …
    
      Examples
          $ up strangers.mp3
          $ up sigrid.png
    `);
    } else {
        return {
            flags: {
                help: {
                    alias: 'h',
                },
                version: {
                    alias: 'v',
                },
            },
        };
    }
}

module.exports = helpmsg;
