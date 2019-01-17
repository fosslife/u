'use strict';
/**
 * Print an error message and exit
 * the process. disabled eslint as
 * the function is just a wrapper
 * around process.exit(1), lilnter
 * will always throw the error
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
