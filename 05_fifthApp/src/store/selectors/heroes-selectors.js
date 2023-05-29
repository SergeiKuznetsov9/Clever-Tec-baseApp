import { createSelector } from "reselect";
import { activeFiltersSelector } from "./filters-selectors";

export const heroesLoadingStatusSelector = (state) =>
  state.heroes.heroesLoadingStatus;

export const filteredHeroesSelector = createSelector(
    activeFiltersSelector,
    (state) => state.heroes.heroes,
    (filters, heroes) => {
      if (filters[0] === "all") {
        return heroes;
      }
      return heroes.filter((hero) => filters.includes(hero.element));
    }
  );
