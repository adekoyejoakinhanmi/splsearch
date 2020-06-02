import axios from 'axios';
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

export const getImages = term => {
  return axios({
    method: 'GET',
    url: `https://api.unsplash.com/search/photos?query=${term}&client_id=${ACCESS_KEY}`
  }).then(res => res.data).catch(() => []);
}
