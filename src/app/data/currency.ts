import axios from "axios";

const fetchCurrency = () => {
    return axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_1r7meoXfcU6QR1bH8JlMEPIqoWRVeR89ixVDhWif&currencies=EUR%2CUSD%2CCAD&base_currency=UAH").then(resp => resp.data.data).catch(error => console.log(error));
}

export default fetchCurrency;