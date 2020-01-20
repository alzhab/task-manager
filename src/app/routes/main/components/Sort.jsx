import React, { useEffect } from "react";
import M from "materialize-css";

const Sort = () => {
  useEffect(() => {
    let selects = document.querySelectorAll("select");

    M.FormSelect.init(selects, {});
  }, []);

  return (
    <div className="row" style={{ alignItems: "center", display: "flex" }}>
      <div className="input-field col s11">
        <select defaultValue={0}>
          <option value="0" disabled>
            Sort By
          </option>
          <option value="1">Имя Пользователя</option>
          <option value="2">Email</option>
          <option value="3">Status</option>
        </select>
        <label>Materialize Select</label>
      </div>
      <div className="col s1">
        <a class="waves-effect waves-light btn btn-flat">
          <i class="material-icons">arrow_upward</i>
        </a>
        <a class="waves-effect waves-light btn btn-flat">
          <i class="material-icons">arrow_downward</i>
        </a>
      </div>
    </div>
  );
};

export default Sort;
