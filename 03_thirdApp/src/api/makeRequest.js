const API_ENDPOINT = "https://gateway.marvel.com:443/v1/public";
const API_KEY = "apikey=8efbe4f447833a457c8a994f50e8ac07";

const commonRequest = ({ url, options }) => {
  url = `${API_ENDPOINT}${url}${API_KEY}`;

  return fetch(url, options);
};

export const getRequest = async (url) => {
  let response = await commonRequest({ url });

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }

  return await response.json();
};
