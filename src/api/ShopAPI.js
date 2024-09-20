import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://65afabe62f26c3f2139b6df0.mockapi.io',
})

export const getItemsAPI = async (params) => {
   const paramsString = params.join('&');
   const response = await instance.get(`items?${paramsString}`);
   return response.data;
}