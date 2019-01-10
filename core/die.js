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
    process.exit(1);
};

module.exports = die;
