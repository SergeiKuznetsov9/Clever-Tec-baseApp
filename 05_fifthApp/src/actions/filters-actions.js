export const fetchFiltersThunk = (request) => (dispatch) => {
  request("http://localhost:3001/filters")
    .then((data) => dispatch(optionsFetched(data)))
    .catch(() => console.log("Произошла ошибка загрузки"));
};

const optionsFetched = (options) => ({
  type: "ELEMENT_OPTIONS_FETCHED",
  payload: options,
});



export const addFilterThunk =
  ({ filterName, activeFilters }) =>
  (dispatch) => {
    if (filterName === "all") {
      dispatch(toggleFilter(["all"]));
      return;
    }

    const newActiveFilters = activeFilters.filter(
      (filter) => filter !== "all" && filter !== filterName
    );

    if (activeFilters.indexOf(filterName) === -1)
      newActiveFilters.push(filterName);

    if (!newActiveFilters.length) newActiveFilters.push("all");

    dispatch(toggleFilter(newActiveFilters));
  };

const toggleFilter = (filter) => ({
  type: "TOGGLE_FILTER",
  payload: filter,
});
