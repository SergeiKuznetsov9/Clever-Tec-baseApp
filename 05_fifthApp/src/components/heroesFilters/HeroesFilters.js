import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { addFilterThunk } from "../../store/thunk/filters-thunk";

export const HeroesFilters = () => {
  const dispatch = useDispatch();
  const { filters, activeFilters } = useSelector(
    (state) => state.filtersReducer
  );

  const addFilter = (filterName) => {
    dispatch(addFilterThunk({ filterName, activeFilters }));
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {filters.map((filter) => (
            <button
              key={filter.name}
              className={classNames(`btn ${filter.className}`, {
                active: activeFilters.includes(filter.name),
              })}
              onClick={() => addFilter(filter.name)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
