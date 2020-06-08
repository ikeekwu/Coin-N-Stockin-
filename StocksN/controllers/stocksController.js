const axios = require("axios")

module.exports = {
    getSearch: function(req, res){
        const Intrinio_API_KEY = "api_key=OmE4NDQ2ZDRiNDA4ZWYwMjAyZDViOWMxMjJlNzY2MzI3";
        axios.get(`https://api-v2.intrinio.com/companies?`+ Intrinio_API_KEY)
        .then(response => {
            res.json(response.data)
        })
        .catch(err => console.log(err));
    }
}