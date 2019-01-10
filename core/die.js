'use strict';
/**
 * Print an error message and exit
 * the process
 * @param {String} msg Message to print before exiting
 */
/* eslint:disable no-process-exit */
const die = msg => {
    if (msg) {
        console.error(msg);
    }
    /* eslint-disable unicorn/no-process-exit */
    process.exit(1);
};

module.exports = die;
