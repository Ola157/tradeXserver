const { default: axios } = require("axios");

exports.handleFetchRate = async (req, res) => {

    await axios.get('https://pro-api.coinmarketcap.com/cryptocurrency ', {
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
            res.send('Error fetching exchange rates:', error);
        });
};