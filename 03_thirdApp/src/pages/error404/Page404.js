import { Link } from "react-router-dom";

import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import "./Page404.scss";

export const Page404 = () => (
  <div>
    <ErrorMessage />
    <p className="page404__message">Page doesn't exist</p>
    <Link className="page404__link" to="/">
      Back to main page
    </Link>
  </div>
);
