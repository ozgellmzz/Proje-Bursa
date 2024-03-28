import axios from 'axios';

export const getVeri = async () => {
    try {
        const res = await axios.get('http://localhost:3000/data/bursa.json');
        return res.data.data;

    }catch (error) {
        console.error(error);
    }
};
