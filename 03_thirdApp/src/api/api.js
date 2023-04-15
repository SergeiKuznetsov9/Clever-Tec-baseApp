import { getAllCharacters, getCharacter } from "./characters";
import { getAllComics, getComic } from "./comics";

export const api = {
  characters: {
    getAllCharacters,
    getCharacter,
  },
  comics: {
    getAllComics,
    getComic,
  },
};
