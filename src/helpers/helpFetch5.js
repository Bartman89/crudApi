export const helpFetch = () => {
  const URL = "http://localhost:3004";

  const customFetch = (endpoint, options = {}) => {
    options.method = options.method || "GET";

    if (options.body) {
      options.body = JSON.stringify(options.body);
    }

    options.headers = {
      "content-type": "application/json",
    };

    return fetch(`${URL}/${endpoint}`, options)
      .then((response) => {
        return response.ok ? response.json() : Promise.reject();
      })

      .catch((error) => {
        return {
          error: true,
          statusText: "Error: No se logro la peticion",
        };
      });
  };

  const get = (endpoint) => {
    return customFetch(endpoint);
  };

  const put = (endpoint, options, id) => {
    return customFetch(`${endpoint}/${id}`, options);
  };

  const post = (endpoint, options) => {
    return customFetch(endpoint, options);
  };

  const eliminar = (endpoint, options, id) => {
    return customFetch(`${endpoint}/${id}`, options);
  };

  return { get, put, post, eliminar };
};
