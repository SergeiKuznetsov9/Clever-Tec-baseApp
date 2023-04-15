import { Route, Routes } from "react-router-dom";

import AppLayout from "../appLayout/AppLayout";
import Characters from "../../pages/characters/Characters";
import ComicsList from "../../pages/comicsList/ComicsList";
import SingleComic from "../../pages/singleComic/SingleComic";
import { Page404 } from "../../pages/error404/Page404";

const App = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Characters />} />
      <Route path="comics" element={<ComicsList />} />
      <Route path="comics/:id" element={<SingleComic />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  </Routes>
);

export default App;
