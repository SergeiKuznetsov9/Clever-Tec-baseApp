import { Component } from "react";
import { api } from "../../api";
import "./charList.scss";

class CharList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    chars: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.updateChars();
  }

  updateChars = () => {
    this.setState({ loading: true });
    api.characters.getAllCharacters().then(this.onCharsLoaded, this.onError);
  };

  onCharLoading = () => {
    this.setState({
      loading: true,
      error: false,
    });
  };

  onCharsLoaded = (chars) => {
    this.setState({
      chars,
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
    const { onCharselected } = this.props;

    return (
      <div className="char__list">
        <ul className="char__grid">
          {this.state.chars.map((char) => {
            const isImageFound = char.thumbnail.includes("image_not_available")
              ? false
              : true;

            return (
              <li
                className="char__item"
                key={char.id}
                onClick={() => onCharselected(char.id)}
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
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
