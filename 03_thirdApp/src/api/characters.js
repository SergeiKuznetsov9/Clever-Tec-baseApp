import { _normalizeCharacter } from "./apiNormalizers/charactersNormalizer";
import { getRequest } from "./makeRequest";

const URL = "/characters";
const LIMIT = "limit=9";
const OFFSET = "offset=210";

export const getAllCharacters = () => getRequest(`${URL}?${LIMIT}&${OFFSET}&`);
export const getCharacter = (id) =>
  getRequest(`${URL}/${id}?`).then((res) =>
    _normalizeCharacter(res.data.results[0])
  );
