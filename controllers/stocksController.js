const axios = require("axios")

const Intrinio_API_KEY = "api_key=OmE4NDQ2ZDRiNDA4ZWYwMjAyZDViOWMxMjJlNzY2MzI3";

module.exports = {
    getSearch: function(req, res){
        axios.get(`https://api-v2.intrinio.com/companies?`+ Intrinio_API_KEY)
        .then(response => {
            res.json(response.data)
        })
        .catch(err => console.log(err));
    },
    getRealTimePrices: function(req, res){
            const {body} = req
            // console.log(body)
            const {companies} = body
            // console.log(companies)
            const tickers = companies.map((company) => company.ticker)
            // console.log(tickers)
            const apicalls = tickers.map((ticker) => {
                return axios.get(`https://api-v2.intrinio.com/securities/${ticker}/prices/realtime?`+ Intrinio_API_KEY)
            })
            Promise.all(apicalls)
            .then((response) => {
                // console.log(response.length)
                // console.log(response[0])
                // res.json(JSON.stringify(response))
                const boxData = response.map((data) => {
                    
                    const {last_time, open_price, high_price, low_price, last_price} = data.data
                    
                    const cData = [{
                        x: last_time,
                        y: [open_price, high_price, low_price, last_price]
                    }]

                    // console.log(cData)


                    return cData
                })
                // console.log(boxData)
                res.json(boxData)
            })
            .catch(err => console.log(err))
    },
    getNews: function(req, res){
        const {body} = req
        // console.log(body)
        const {news} = body
    }
    
}