const { default: axios } = require("axios");

exports.handleFetchRate = async () => {

    await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map ', {
        headers: {
            'X-CMC_PRO_API_KEY': `${process.env.COINMARKET}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
        .then((response) => {
            const { data } = response.data
            console.log(data)
        })
        .catch((error) => {
            console.error('Error fetching exchange rates:', error);
        });
};