import axios from "axios";

// const CMC_PRO_API_KEY = "CMC_PRO_API_KEY=6461f779-9d5a-42a7-b7b1-2676a7c800a4";

export default {
  // Gets all books
  getAllStocks: function() {
    return axios.get("/api/stocks/");
  },
  getCrypto: function() {
    return axios.get("/api/crypto/");
  },
  getFavorites: function() {
    return axios.get("/books/id");
  },
};
