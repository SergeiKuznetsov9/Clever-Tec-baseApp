import {
  getAllCharacters,
  getCharacter,
  getCharacterByName,
} from "./characters";
import { getAllComics, getComic } from "./comics";

export const api = {
  characters: {
    getAllCharacters,
    getCharacter,
    getCharacterByName,
  },
  comics: {
    getAllComics,
    getComic,
  },
};
