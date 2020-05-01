import axios from 'axios';

export default axios.create({
    baseURL: `https://api.unsplash.com`,
    headers:{
        Authorization: 'Client-ID ZfFgErLB59k-46wEa6ofatzNwQm0W5HQwpn3_KK11Lg'
    }
});