// const getToken = () => localStorage.getItem('token');

// const isAuthorized = () => (getToken() ? true : false);

// export default isAuthorized;

const isAuthorized = () => {
  if (localStorage.getItem('token')) {
    return true;
  }

  return false;
};

export default isAuthorized;
