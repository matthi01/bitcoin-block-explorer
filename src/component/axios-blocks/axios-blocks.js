import axios from "axios";

const instance = axios.create({
    baseURL: "https://chain.api.btc.com/v3/block"
});

export default instance;
