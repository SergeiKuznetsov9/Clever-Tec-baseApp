import { getRequest } from "./makeRequest";
import { _normalizeResponse } from "./apiNormalizers/charactersNormalizer";

const URL = "/characters";
const LIMIT = "limit=9";
const OFFSET = "210";

export const getAllCharacters = (offset = OFFSET) =>
  getRequest(`${URL}?${LIMIT}&offset=${offset}&`).then((res) =>
    res.data.results.map((char) => _normalizeResponse(char))
  );

export const getCharacter = (id) =>
  getRequest(`${URL}/${id}?`).then((res) =>
    _normalizeResponse(res.data.results[0])
  );
