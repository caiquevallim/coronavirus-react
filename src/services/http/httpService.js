import axios from 'axios';
import settings from '../../config/config';

class GenericHttpRequest {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }
  get(uri, params, config = {}) {
    return this.axios.get(uri, { params, ...config });
  }

  post(uri, data, config = {}) {
    return this.axios.post(uri, data, { ...config });
  }

  put(uri, data, config = {}) {
    return this.axios.put(uri, data, { ...config });
  }

  delete(uri, params, config = {}) {
    return this.axios.delete(uri, { params, ...config });
  }
}

const configureAxios = (axiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    const c = config;
    const authData = loginAuthDataService.getAuthData();
    if (authData && authData.token) {
      c.headers['X-Auth-Token'] = authData.token;
    }
    return c;
  }, error => Promise.reject(error));

  // Add a response interceptor
  axiosInstance.interceptors.response.use((response) => {
    switch (response.status) {
        case 401:
        // TODO: WHEN APPLICATION HAS IMPLEMENTED A AUTH SYSTEM
        break;
      default:
        break;
    }
    return response;
  }, (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
            // TODO: WHEN APPLICATION HAS IMPLEMENTED A AUTH SYSTEM
            break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  });
};
const createAxiosInstance = (baseUrl) => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
  });
  configureAxios(axiosInstance);
  return axiosInstance;
};

class HttpService extends GenericHttpRequest {
  useApiBing() {
    const api = 'https://www.bing.com/covid';
    this.BING_API = new GenericHttpRequest(createAxiosInstance(api));
    return this.BING_API;
  };
}
export default new HttpService(createAxiosInstance(settings.API));
