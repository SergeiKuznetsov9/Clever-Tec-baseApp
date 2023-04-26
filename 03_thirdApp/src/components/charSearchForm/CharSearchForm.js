import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHttp } from "../../hooks/useHttp";
import "./charSearchForm.scss";

const CharSearchForm = () => {
  const [char, setChar] = useState(null);
  const { loading, request } = useHttp();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
    mode: "all",
  });

  const onSubmit = (data) => {
    reset();
    request("characters", "getCharacterByName", data.name).then(setChar);
  };

  return (
    <div className="char__search-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="char__search-label" htmlFor="charName">
          Or find a character by name:
        </label>
        <div className="char__search-wrapper">
          <div>
            <input
              placeholder="Enter name"
              {...register("name", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "Min length 3 chars",
                },
              })}
            />
            {errors.name && (
              <div className="char__search-input-error">
                {errors.name.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="button button__main"
            disabled={loading}
          >
            <div className="inner">find</div>
          </button>
        </div>
        {char === undefined && (
          <div className="char__search-error">
            The character was not found. Check the name and try again
          </div>
        )}
        {char && (
          <div className="char__search-error">
            <a href={char.url} target="_blank">
              There is! Visit {char.name} page?
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default CharSearchForm;
