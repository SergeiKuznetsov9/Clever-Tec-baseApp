import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

import { useHttp } from "../../hooks/useHttp";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Spinner from "../../components/spinner/Spinner";
import "./singleComic.scss";

const SingleComic = () => {
  const params = useParams();
  const { loading, request, error } = useHttp();
  const [comic, setComic] = useState(null);

  useEffect(() => {
    request("comics", "getComic", params.id).then(setComic);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <div className={classNames(loading ? "" : "single-comic")}>
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ comic }) => (
  <>
    <img src={comic.thumbnail} alt="x-men" className="single-comic__img" />
    <div className="single-comic__info">
      <h2 className="single-comic__name">{comic.title}</h2>
      <p className="single-comic__descr">{comic.description}</p>
      <p className="single-comic__descr">{comic.pageCount} pages</p>
      <p className="single-comic__descr">
        Language:{" "}
        {comic.textObjects?.length ? comic.textObjects[0].language : "en-us"}{" "}
      </p>
      <div className="single-comic__price">{comic.prices?.[0].price}$</div>
    </div>
    <Link to="/comics" key={comic.id} className="single-comic__back">
      Back to all
    </Link>
  </>
);

export default SingleComic;
