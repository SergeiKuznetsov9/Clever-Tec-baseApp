import { useEffect, useState } from "react";
import { api } from "../../api";
import "./charList.scss";

const CharList = ({ onCharselected }) => {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadingNew, setLoadingNew] = useState(false);
  const [loadingNewError, setLoadingNewError] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [offset, setOffset] = useState(219);
  const [selectedCharIndex, setSelectedCharIndex] = useState(null);

  const cardsElRefs = [];

  useEffect(() => {
    updateChars();
  }, []);

  const updateChars = () => {
    setLoading(true);
    api.characters.getAllCharacters().then(onCharsLoaded, onError);
  };

  const getNewChars = () => {
    setLoadingNew(true);

    api.characters
      .getAllCharacters(offset)
      .then(onNewCharsLoaded, onLoadingNewError);
  };

  const onNewCharsLoaded = (newChars) => {
    const isEnd = newChars.length < 9;

    setChars([...chars, ...newChars]);
    setLoadingNew(false);
    setError(false);

    setOffset(offset + 9);
    setIsEnd(isEnd);
  };

  const onLoadingNewError = () => {
    setLoadingNew(false);
    setError(true);
  };

  const onCharsLoaded = (chars) => {
    setChars(chars);
    setLoading(false);
    setError(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const setInputRef = (el) => {
    cardsElRefs.push(el);
  };

  const handleCharSelect = (charId, index) => {
    onCharselected(charId);

    if (selectedCharIndex !== null) {
      cardsElRefs[selectedCharIndex].classList.remove("char__item_selected");
    }
    cardsElRefs[index].classList.add("char__item_selected");
    setSelectedCharIndex(index);
  };

  return (
    <div className="char__list">
      <ul className="char__grid">
        {chars.map((char, index) => {
          const isImageFound = !char.thumbnail.includes("image_not_available");

          return (
            <li
              ref={setInputRef}
              className="char__item"
              key={char.id}
              onClick={() => handleCharSelect(char.id, index)}
            >
              <img
                src={char.thumbnail}
                alt="char"
                style={{ objectFit: isImageFound ? "cover" : "contain" }}
              />
              <div className="char__name">{char.name}</div>
            </li>
          );
        })}
      </ul>
      {!isEnd && (
        <button
          className="button button__main button__long"
          onClick={getNewChars}
          disabled={loadingNew}
        >
          <div className="inner">load more</div>
        </button>
      )}
    </div>
  );
};

export default CharList;
