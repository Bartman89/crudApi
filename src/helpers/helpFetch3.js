export const helpFetch = () => {
  const URL = "http://localhost:3004/";

  async function customFetch() {
    options.method = options.method || "GET";
    options.headers = {
      "content-type": "application/json",
    };

    if (options.body) {
      options.body = JSON.stringify(options.body);
    }

    try {
      const response = await fetch(`${URL}${endpoint}`);
      const data = await response.json();

      return data;
    } catch (error) {
      return console.log("New Error ", { error });
    }
  }

  const get = (endpoint) => customFetch(endpoint);

  return { get };
};
