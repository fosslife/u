'use strict';

const domain = process.env.SPRK_SERVER_URL;
const apiKey = process.env.SPRK_API_KEY;
const die = require('./core/die');

if (!domain) {
  die('Server URL not available, Please set SPRK_SERVER_URL env variable.')
}

if (!apiKey) {
  die('Server API key not available, set SPRK_API_KEY env variable.')
}

module.exports = {
  domain,
  apiKey,
};
