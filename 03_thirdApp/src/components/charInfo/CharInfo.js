import { Component, useEffect, useState } from "react";

import { api } from "../../api";
import Skeleton from "../skeleton/Skeleton";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charInfo.scss";

const CharInfo = ({ charId }) => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    updateChar();
  }, [charId]);

  const updateChar = () => {
    if (!charId) {
      return;
    }

    onCharLoading();
    api.characters.getCharacter(charId).then(onCharLoaded, onError);
  };

  const onCharLoading = () => {
    setLoading(true);
  };

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, comics } = char;
  const isImageFound = !thumbnail.includes("image_not_available");
  const noComicsMessage = "There is no comics with this character";

  return (
    <>
      <div className="char__basics">
        <img
          src={thumbnail}
          alt="abyss"
          style={{ objectFit: isImageFound ? "cover" : "contain" }}
        />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href="#" className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href="#" className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics?.items.length > 0 ? (
          [...comics.items].splice(10, comics.items.length - 10).map((item) => (
            <li className="char__comics-item" key={item.name}>
              <a href={item.resourceURI}>{item.name}</a>
            </li>
          ))
        ) : (
          <div>{noComicsMessage}</div>
        )}
      </ul>
    </>
  );
};

export default CharInfo;
