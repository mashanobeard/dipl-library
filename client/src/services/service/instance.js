import axios from 'axios/index';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    // 'x-auth-token': localStorage.getItem('user-info'),
    'Content-Type': 'application/json',
  },
});

const request = async (config) => {
  return await axiosInstance.request(config);
};

export default request;
