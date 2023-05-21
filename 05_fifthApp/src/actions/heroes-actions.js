export const fetchHeroesThunk = (request) => (dispatch) => {
  dispatch(heroesFetching());
  request("http://localhost:3001/heroes")
    .then((data) => dispatch(heroesFetched(data)))
    .catch(() => dispatch(heroesFetchingError()));
};

const heroesFetching = () => ({
  type: "HEROES_FETCHING",
});

const heroesFetched = (heroes) => ({
  type: "HEROES_FETCHED",
  payload: heroes,
});

const heroesFetchingError = () => ({
  type: "HEROES_FETCHING_ERROR",
});



export const heroCreatingThunk =
  ({ request, data, reset }) =>
  (dispatch) => {
    dispatch(heroCreating());
    request("http://localhost:3001/heroes", "POST", JSON.stringify(data))
      .then((res) => {
        dispatch(heroCreated(res));
        reset();
      })
      .catch(() => {
        console.log("Возникла ошибка создания");
        dispatch(heroCreatingError());
      });
  };

const heroCreating = () => ({
  type: "HERO_CREATING",
});

const heroCreated = (hero) => ({
  type: "HERO_CREATED",
  payload: hero,
});

const heroCreatingError = () => ({
  type: "HERO_CREATING_ERROR",
});



export const heroRemovingThunk =
  ({ request, id, heroes }) =>
  (dispatch) => {
    dispatch(heroRemoving());
    request(`http://localhost:3001/heroes/${id}`, "DELETE")
      .then(() => {
        const newHeroesArray = heroes.filter((hero) => hero.id !== id);
        dispatch(heroRemoved(newHeroesArray));
      })
      .catch(() => {
        console.log("Произошла ошибка удаления");
        heroRemovingError();
      });
  };

const heroRemoving = () => ({
  type: "HERO_REMOVING",
});

const heroRemoved = (heroes) => ({
  type: "HERO_REMOVED",
  payload: heroes,
});

const heroRemovingError = () => ({
  type: "HERO_REMOVING_ERROR",
});
