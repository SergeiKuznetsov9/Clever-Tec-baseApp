import { Component } from "react";
import classNames from "classnames";

import { api } from "../../api";
import mjolnir from "../../resources/img/mjolnir.png";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import "./randomChar.scss";

class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateChar();
  }

  updateChar = () => {
    this.setState({ loading: true });
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    api.characters.getCharacter(id).then(this.onCharLoaded, this.onError);
  };

  onCharLoading = () => {
    this.setState({
      loading: true,
      error: false,
    });
  };

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false,
      error: false,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  render() {
    const { char, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
      <div className="randomchar">
        {errorMessage}
        {spinner}
        {content}
        
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button
            className="button button__main"
            onClick={this.updateChar}
            disabled={loading}
          >
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail } = char;
  const isImageFound = thumbnail.includes("image_not_available") ? false : true;
  const noDescription = "There is no description for this character";
  const doDescriptionForView = (description) =>
    description.length > 209 ? `${description.slice(0, 210)}...` : description;

  return (
    <div className="randomchar__block">
      <img
        src={thumbnail}
        alt="Random character"
        className={classNames("randomchar__img", {
          "randomchar__img-found": isImageFound,
          "randomchar__img-not-found": !isImageFound,
        })}
      />

      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">
          {description ? doDescriptionForView(description) : noDescription}
        </p>
        <div className="randomchar__btns">
          <a href="#" className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href="#" className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
