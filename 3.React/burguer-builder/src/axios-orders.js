import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burgerbuilder-50bec.firebaseio.com/',
});

export default instance;