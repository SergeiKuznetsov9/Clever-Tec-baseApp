import { Route, Routes } from "react-router-dom";

import AppLayout from "../appLayout/AppLayout";
import Characters from "../../pages/characters/Characters";
import ComicsList from "../../pages/comicsList/ComicsList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Characters />} />
        <Route path="comics" element={<ComicsList />} />
      </Route>
    </Routes>
  );
};

export default App;
