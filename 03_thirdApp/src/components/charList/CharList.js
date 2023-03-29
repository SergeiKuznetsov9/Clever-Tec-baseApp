import { Component } from "react";
import { api } from "../../api";
import "./charList.scss";

class CharList extends Component {
  state = {
    chars: [],
    loading: false,
    error: false,
    loadingNew: false,
    loadingNewError: false,
    isEnd: false,
    offset: 219,
    selectedCharIndex: null,
  };

  cardsElRefs = [];

  componentDidMount() {
    this.updateChars();
    console.log(this.cardsElRefs);
  }

  updateChars = () => {
    this.setState({ loading: true });
    api.characters.getAllCharacters().then(this.onCharsLoaded, this.onError);
  };

  getNewChars = () => {
    this.setState({ loadingNew: true });
    api.characters
      .getAllCharacters(this.state.offset)
      .then(this.onNewCharsLoaded, this.onLoadingNewError);
  };

  onNewCharsLoaded = (chars) => {
    const isEnd = chars.length < 9;
    this.setState((state) => ({
      chars: [...state.chars, ...chars],
      loadingNew: false,
      error: false,
      offset: state.offset + 9,
      isEnd,
    }));
  };

  onLoadingNewError = () => {
    this.setState({
      loadingNew: false,
      error: true,
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

  setInputRef = (el) => {
    this.cardsElRefs.push(el);
  };

  handleCharSelect = (charId, index) => {
    this.props.onCharselected(charId);

    if (this.state.selectedCharIndex !== null) {
      this.cardsElRefs[this.state.selectedCharIndex].classList.remove(
        "char__item_selected"
      );
    }
    this.cardsElRefs[index].classList.add("char__item_selected");
    this.setState({ selectedCharIndex: index });
  };

  render() {
    return (
      <div className="char__list">
        <ul className="char__grid">
          {this.state.chars.map((char, index) => {
            const isImageFound = !char.thumbnail.includes(
              "image_not_available"
            );

            return (
              <li
                ref={this.setInputRef}
                className="char__item"
                key={char.id}
                onClick={() => this.handleCharSelect(char.id, index)}
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
        {!this.state.isEnd && (
          <button
            className="button button__main button__long"
            onClick={this.getNewChars}
            disabled={this.state.loadingNew}
          >
            <div className="inner">load more</div>
          </button>
        )}
      </div>
    );
  }
}

export default CharList;
