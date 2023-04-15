import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import AppLayout from "../appLayout/AppLayout";
import Characters from "../../pages/characters/Characters";
import Spinner from "../spinner/Spinner";

const ComicsList = lazy(() => import("../../pages/comicsList/ComicsList"));
const SingleComic = lazy(() => import("../../pages/singleComic/SingleComic"));
const Page404 = lazy(() => import("../../pages/error404/Page404"));

const App = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Characters />} />
        <Route path="comics" element={<ComicsList />} />
        <Route path="comics/:id" element={<SingleComic />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </Suspense>
);

export default App;
