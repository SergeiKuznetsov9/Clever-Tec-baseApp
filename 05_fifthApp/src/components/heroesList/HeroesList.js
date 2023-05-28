import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHttp } from "../../hooks/http.hook";
import { HeroesListItem } from "../heroesListItem/HeroesListItem";
import { Spinner } from "../spinner/Spinner";
import { heroRemovingThunk } from "../../store/thunk/heroes-thunk";

export const HeroesList = () => {
  const dispatch = useDispatch();
  const { request } = useHttp();

  const { heroesLoadingStatus } = useSelector(
    (state) => state.heroesReducer.heroes
  );

  const heroes = useSelector((state) => {
    const { activeFilters } = state.filtersReducer;
    const { heroes } = state.heroesReducer;
    if (activeFilters[0] === "all") {
      return heroes;
    }
    return heroes.filter((hero) => activeFilters.includes(hero.element));
  });

  const onDelete = useCallback(
    (id) => {
      dispatch(heroRemovingThunk({ id, request, heroes }));
    },

    [request, heroes, dispatch]
  );

  if (heroesLoadingStatus === "loading") {
    return <Spinner />;
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return arr.map(({ id, ...props }) => {
      return (
        <HeroesListItem key={id} {...props} onDelete={() => onDelete(id)} />
      );
    });
  };

  const elements = renderHeroesList(heroes);
  return <ul>{elements}</ul>;
};
