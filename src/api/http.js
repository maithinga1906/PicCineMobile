/* eslint-disable prettier/prettier */
import axios from 'axios';
import { useSelector } from 'react-redux';

const API_ROOT = 'https://backend-piccine.herokuapp.com/api';

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 15000;

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => handleError(error),
);

const handleError = (error) => {
  let dataCode = 'not_response';
  if (error.response) {
    const { code, message, data, status } = error.response;
    if (status === 401) {
      // dispatch logout
      // store.dispatch(logout());
    }
  }
  return Promise.reject(error.response || error.request || error.message);
};

function getHeaderAndContentType(extension) {
  let mimeType;
  if (extension.includes('jpg') || extension.includes('jpeg')) {
    mimeType = 'image/jpeg';
  }
  if (extension.includes('png')) {
    mimeType = 'image/png';
  }
  return mimeType;
}

const http = {
  setAuthorizationHeader(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },

  request(config = {}) {
    return axios.request(config);
  },
  get(url, config = {}) {
    return axios.get(url, config);
  },
  post(url, data = {}, config = {}) {
    return axios.post(url, data, config);
  },
  put(url, data = {}, config = {}) {
    return axios.put(url, data, config);
  },
  patch(url, data = {}, config = {}) {
    return axios.patch(url, data, config);
  },
  delete(url, config = {}) {
    return axios.delete(url, config);
  },
  postUploadFile(url, data = {}) {
    let formData = new FormData();
    data.photos.forEach((photo) => {
      formData.append('photos', {
        uri: photo,
        type: 'image/jpg',
        name: `${new Date().getTime()}.jpg`,
      });
    });

    return this.post(url, formData);
  },
  uploadFile(url, data) {
    let formData = new FormData();
    const extension = data.split('.').pop();
    const mimeType = getHeaderAndContentType(extension);
    formData.append('file', {
      uri: data,
      type: mimeType,
      name: `${new Date().getTime()}.jpg`,
    });

    return this.post(url, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default http;
