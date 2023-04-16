import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useHttp } from "../../hooks/useHttp";
import "./comicsList.scss";

const ComicsList = () => {
  const { loading, request } = useHttp();
  const [comics, setComics] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [offset, setOffset] = useState(9);

  const getNewComics = () => {
    request("comics", "getAllComics", offset).then(onNewComicsLoaded);
  };

  const onNewComicsLoaded = (newComics) => {
    const isEnd = newComics.length < 8;
    setComics([...comics, ...newComics]);
    setOffset(offset + 8);
    setIsEnd(isEnd);
  };

  useEffect(() => {
    request("comics", "getAllComics").then(setComics);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="comics__list">
      <ul className="comics__grid">
        {comics.map((comic) => (
          <Link to={`${comic.id}`} key={comic.id}>
            <li className="comics__item">
              <img
                src={comic.thumbnail}
                alt="poster"
                className="comics__item-img"
              />
              <div className="comics__item-name">{comic.title}</div>
              <div className="comics__item-price">
                {comic.prices?.[0].price}$
              </div>
            </li>
          </Link>
        ))}
      </ul>
      {!isEnd && (
        <button
          className="button button__main button__long"
          onClick={getNewComics}
          disabled={loading}
        >
          <div className="inner">load more</div>
        </button>
      )}
      <button></button>
    </div>
  );
};

export default ComicsList;
