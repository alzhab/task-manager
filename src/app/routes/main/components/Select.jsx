import React, { useEffect } from "react";
import M from "materialize-css";

const Select = () => {
  useEffect(() => {
    let selects = document.querySelectorAll("select");

    M.FormSelect.init(selects, {});
  }, []);

  return (
    <div className="input-field col s12">
      <select>
        <option value="" disabled selected>
          Sort By
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <label>Materialize Select</label>
    </div>
  );
};

export default Select;
