const { default: axios } = require("axios");

exports.handleFetchRate = (req, res) => {

    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest ', {
        headers: {
            'X-CMC_PRO_API_KEY': `${process.env.COINMARKET}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
        .then((response) => {
            const { data } = response.data
            res.json(data)
        })
        .catch((error) => {
            res.send(error);
        });
};