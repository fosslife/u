'use strict';
/**
 * print an error message and exit
 * the process
 * @param {String} msg 
 */
const die = (msg) => {
    msg && console.error(msg);
    process.exit(1);
}

module.exports = die;
