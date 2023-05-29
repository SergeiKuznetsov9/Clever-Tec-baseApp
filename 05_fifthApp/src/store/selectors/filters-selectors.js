export const elementOptionsSelector = (state) =>
  state.filters.filters.filter((option) => option.name !== "all");

export const filtersSelector = (state) => state.filters.filters;

export const activeFiltersSelector = (state) => state.filters.activeFilters;
