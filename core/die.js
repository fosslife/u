const die = (msg) => {
    msg && console.error(msg);
    process.exit(1);
}

module.exports = die;
