import { _normalizeResponse } from "./apiNormalizers/charactersNormalizer";
import { getRequest } from "./makeRequest";

const URL = "/comics";
const LIMIT = "limit=8";
const OFFSET = "210";

export const getAllComics = (offset = OFFSET) =>
  getRequest(`${URL}?${LIMIT}&offset=${offset}&`).then((res) =>
    res.data.results.map((comic) => _normalizeResponse(comic))
  );

export const getComic = (id) =>
  getRequest(`${URL}/${id}?`).then((res) =>
    _normalizeResponse(res.data.results[0])
  );
