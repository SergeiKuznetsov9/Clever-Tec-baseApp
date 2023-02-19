import "./employees-add-form.css";

export const EmployeesAddForm = () => (
    <div className="app-add-form">
      <div className="app-add-form-hint">Добавьте нового сотрудника</div>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
