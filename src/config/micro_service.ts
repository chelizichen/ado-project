import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const msAxios = axios.create({
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
  baseURL: "http://localhost:5005/api/proxy/interceptor",
  method:'post'
});

msAxios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
msAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status } = response;
    if (status == 200 || status == 201) {
      return response.data;
    }
    return Promise.reject(new Error("Error"));
  },
  (error) => {
    return Promise.reject(new Error(error || "Error"));
  }
);


function createkey(host: string, port: number) {
  return `-h ${host} -p ${port}`;
}

/**
 * @description 数据包装后再分发
 * @param data 
 * @returns 
 */
function proxyRequest<T>(data: {
  interFace: string;
  method: string;
  timeout?: string;
  key?: string;
  data:T
}) {
  let key = createkey('127.0.0.1', 10012)
  data.key = key
  if (!data.timeout) {
    data.timeout = String(3000);
  }
  return msAxios({
    data,
  });  
}



export { proxyRequest };