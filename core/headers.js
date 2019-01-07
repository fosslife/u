
const headers = (k, l) => {
    return {
        'Content-Type': `multipart/form-data; boundary=${l}`,
        'api-key': k,
    }
}

module.exports = headers;
