//import axios from 'axios';
// import Cookies from 'js-cookie';

// const axiosInstance = axios.create({
//   baseURL: '/api',
//   headers: {
//     'Content-Type': 'application/json',
//     // Authorization: `Bearer ${authToken}`
//   },
// });
// const request = async config =>{
//   return await axiosInstance.request(config)
// }

import requests from '../service/requests.js';

export const Registration = async (user) => {
  return await requests.post('/auth/registration', { data: user });
};

export const Login = async (user, token) => {
  return await requests.post('/auth/login', {
    data: user,
    // headers: { Authorization: 'Bearer ' + user.token },
  });
};
// export const Auth = async (user) => {
//   return await requests.get('/auth/auth', {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   });
// };

export const BookList = async (token) => {
  return await requests.get('/library/get', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const BookId = async (id) => {
  return await requests.get(`/library/get/${id}`);
};

export const editUser = async (id) => {
  return await requests.put('/settings/edit', { data: id });
};

export const createComment = async (comData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await requests.post('/library/comment', comData, config);

  return response.data;
};

export const getComments = async (id, token) => {
  return await requests.get(`/library/comments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postRating = async (data, token) => {
  return await requests.post('/library/rating', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });
};

export const getRating = async (id, token) => {
  return await requests.get(`/library/rating/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
// const getFilms = async (token, query) => {
//   return await requests.get(`/films${query}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const Login = (user) =>
//   axiosInstance.request({ method: 'POST', data: user, url: '/auth/login' });

// export const Registration = (user) =>
//   axiosInstance.request({
//     method: 'POST',
//     url: '/auth/registration',
//     data: user,
//   });

// export const BookList = (books) =>
//   axiosInstance.request({
//     method: 'GET',
//     url: '/library/get',
//     data: books,
//   });

// export const BookId = (books, id) =>
//   axiosInstance.request({
//     method: 'GET',
//     url: `/library/get/${id}`,
//     data: books,
//   });

// const request = async (config) => {
//   return await axiosInstance.request(config);
// };

// const postReg = async (url, options) => {
//   console.log(options, 'options');
//   return await request({ ...options, url, method: 'POST' });
// };

// export const register = async (data) => {
//   console.log(data, 'data');
//   return await postReg('/registration', { data });
// };

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const authToken = Cookies.get('auth-token');

//     // перехватчик
//     if (authToken) {
//       config.headers.authorization = `Bearer ${authToken}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );
