import React, { useEffect } from "react";
import M from "materialize-css";

const Sort = ({ value, changedField, changedDir, activeDir }) => {
  useEffect(() => {
    let selects = document.querySelectorAll("select");

    M.FormSelect.init(selects, {});
  }, []);

  return (
    <div className="row" style={{ alignItems: "center", display: "flex" }}>
      <div className="input-field col s11">
        <select value={value} onChange={e => changedField(e.target.value)}>
          <option value="0" disabled>
            Sort By
          </option>
          <option value="username">Имя Пользователя</option>
          <option value="email">Email</option>
          <option value="status">Status</option>
        </select>
        <label>Materialize Select</label>
      </div>
      <div className="col s1">
        <button
          className={`waves-effect waves-light btn ${
            activeDir === "asc" ? null : "btn-flat"
          }`}
          onClick={() => changedDir("asc")}
        >
          <i className="material-icons">arrow_upward</i>
        </button>
        <button
          className={`waves-effect waves-light btn ${
            activeDir === "desc" ? null : "btn-flat"
          }`}
          onClick={() => changedDir("desc")}
        >
          <i className="material-icons">arrow_downward</i>
        </button>
      </div>
    </div>
  );
};

export default Sort;
