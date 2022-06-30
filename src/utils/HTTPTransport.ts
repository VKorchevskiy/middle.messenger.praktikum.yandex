import { IOptions, RequestTypes } from "./interface";

const METHODS: Record<RequestTypes, RequestTypes> = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
};

const queryStringify = (data: any) => {
  if (!data) return "";
  return Object.keys(data)
    ?.map((key, i) => `${i === 0 ? "?" : "&"}${key}=${data[key]}`)
    ?.join("");
};

class HTTPTransport {
  get = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.GET });
  };

  post = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (url: string, options: IOptions) => {
    const {
      method = METHODS.GET,
      headers = {},
      data,
      timeout = 5000,
    } = options;

    const queryParam = method === METHODS.GET ? queryStringify(data) : "";

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url + queryParam);

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = () => {
        if (xhr.status > 299) {
          reject(xhr);
        } else {
          resolve(xhr);
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

export function fetchWithRetry(url: string, options: IOptions) {
  const { retries = 5 } = options;

  const handleError = (): any => {
    if (retries - 1 === 0) {
      throw new Error();
    }
    return fetchWithRetry(url, { ...options, retries: retries - 1 });
  };

  return fetch(url, options).catch(() => handleError());
}

export default HTTPTransport;
