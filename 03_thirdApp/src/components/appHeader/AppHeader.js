import { NavLink } from "react-router-dom";
import "./appHeader.scss";

const AppHeader = () => (
  <header className="app__header">
    <h1 className="app__title">
      <a href="#">
        <span>Marvel</span> information portal
      </a>
    </h1>
    <nav className="app__menu">
      <ul>
        <li>
          <NavLink to="/">Characters</NavLink>
        </li>
        /
        <li>
          <NavLink to="/comics">Comics</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default AppHeader;
