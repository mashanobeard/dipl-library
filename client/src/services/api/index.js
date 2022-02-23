//import api from 'api';

// const axiosInstance = api.create({
//   baseURL: '/api',
//   headers: {
//     'Content-Type': 'application/json',
//     // Authorization: `Bearer ${authToken}`
//   },
// });
// const request = async config =>{
//   return await axiosInstance.request(config)
// }

import requests from './requests.js';

export const registerUser = async (user) => {
  return await requests.post('/Auth/registration', { data: user });
};

export const loginUser = async (user, token) => {
  return await requests.post('/Auth/Login', {
    data: user,
    // headers: { Authorization: 'Bearer ' + user.token },
  });
};

export const getBookList = async (token) => {
  return await requests.get('/library/get', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getBookId = async (id) => {
  return await requests.get(`/library/get/${id}`);
};

export const editUser = async ({ id, username, email }) => {
  return await requests.put(`/settings/edit`, {
    data: {
      id,
      username,
      email,
    },
  });
};

export const editPic = async ({ id, pic }) => {
  return await requests.put(`/settings/setPicture`, {
    data: {
      id,
      pic,
    },
  });
};

export const postRating = async (data, token) => {
  return await requests.post('/library/rating', { data });
};

export const getRating = async (id, token) => {
  return await requests.get(`/library/rating/${id}`);
};
