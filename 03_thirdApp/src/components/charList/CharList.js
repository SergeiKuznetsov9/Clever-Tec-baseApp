import { useEffect, useState } from "react";
import { api } from "../../api";
import "./charList.scss";
import { useHttp } from "../../hooks/useHttp";

const CharList = ({ onCharselected }) => {
  const { loading, request, error, clearError } = useHttp();
  const [chars, setChars] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [offset, setOffset] = useState(219);
  const [selectedCharIndex, setSelectedCharIndex] = useState(null);
  const cardsElRefs = [];

  useEffect(() => {
    request("characters", "getAllCharacters").then(setChars);
  }, []);

  const getNewChars = () => {
    request("characters", "getAllCharacters", offset).then(onNewCharsLoaded);
  };

  const onNewCharsLoaded = (newChars) => {
    const isEnd = newChars.length < 9;
    setChars([...chars, ...newChars]);
    setOffset(offset + 9);
    setIsEnd(isEnd);
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
          disabled={loading}
        >
          <div className="inner">load more</div>
        </button>
      )}
    </div>
  );
};

export default CharList;
