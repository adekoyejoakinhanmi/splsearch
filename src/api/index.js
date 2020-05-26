import axios from 'axios';
const ACCESS_KEY = 'cf57663eec5448ba74ddb9fce13cb4a4c0de6773441049147485d5a62fe816f4';
// const SECRET_KEY = '19a9b5ffa3b63b0f09cf4be8b91202fb3246f91c33c8d040bfa77306903e015f';

export const getImages = term => {
  return axios({
    method: 'GET',
    url: `https://api.unsplash.com/search/photos?per_page=9&query=${term}&client_id=${ACCESS_KEY}`
  }).then(res => res.data).catch(() => []);
}
