export const getStorageData = (query) =>
  JSON.parse(localStorage.getItem(query)) || null;

export const setStorageData = (query, data) =>
  localStorage.setItem(query, JSON.stringify(data));

export const removeStorageData = (query) => localStorage.removeItem(query);
