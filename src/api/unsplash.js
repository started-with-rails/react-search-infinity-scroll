import axios from 'axios';

export default axios.create({
    baseURL: `https://api.unsplash.com`,
    headers:{
        Authorization: 'Client-ID FpXtQLmJZ2g4X-GNiq0WKtZpmDuAIAHsAm81qrSPM5k'
    }
});