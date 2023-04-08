import { getRequest } from "./makeRequest";
import { _normalizeCharacter } from "./apiNormalizers/charactersNormalizer";

const URL = "/characters";
const LIMIT = "limit=9";
const OFFSET = "210";

export const getAllCharacters = (offset = OFFSET) => {
  return getRequest(`${URL}?${LIMIT}&offset=${offset}&`).then((res) => {
    const resp = res.data.results.map((char) => _normalizeCharacter(char));
    return resp;
  });
};

export const getCharacter = (id) =>
  getRequest(`${URL}/${id}?`).then((res) =>
    _normalizeCharacter(res.data.results[0])
  );
