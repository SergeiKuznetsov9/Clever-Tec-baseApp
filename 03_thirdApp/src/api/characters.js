import { getRequest } from "./makeRequest";
import { _normalizeCharacter } from "./apiNormalizers/charactersNormalizer";

const URL = "/characters";
const LIMIT = "limit=9";
const OFFSET = "210";

export const getAllCharacters = (offset = OFFSET) =>
  getRequest(`${URL}?${LIMIT}&offset=${offset}&`).then((res) =>
    res.data.results.map((char) => _normalizeCharacter(char))
  );

export const getCharacter = (id) =>
  getRequest(`${URL}/${id}?`).then((res) =>
    _normalizeCharacter(res.data.results[0])
  );
