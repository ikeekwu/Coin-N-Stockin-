const axios = require("axios")

module.exports = {
    getSearch: function(req, res){
        axios({
                method: 'GET',
                url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?',
                qs: {
                  'start': '1',
                  'limit': '10',
                  'convert': 'USD'
                },
                headers: {
                  'X-CMC_PRO_API_KEY': '6461f779-9d5a-42a7-b7b1-2676a7c800a4'
                },
                json: true
              }
        )
        .then(response => {
            res.json(response.data)
        })
        .catch(err => console.log(err));
    }
}