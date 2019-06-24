import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 245260e3cf1d39e9db3ba298f3e6d6c496871c70961ea2f184bbbd6e7887a94b'
    }
});