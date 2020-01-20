import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <React.Fragment>
      <div
        className="modal-overlay"
        style={{ zIndex: 1002, display: "block", opacity: 0.5 }}
        onClick={closeModal}
      ></div>
      <div
        className="modal open"
        style={{
          zIndex: 1003,
          display: "block",
          opacity: 1,
          top: "10%",
          transform: "scaleX(1) scaleY(1)"
        }}
      >
        <div className="modal-content">
          <h4>Create Task</h4>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="title" type="text" className="validate" />
                  <label htmlFor="title">Имя</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="text" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="description"
                    className="materialize-textarea"
                    length="140"
                  ></textarea>
                  <label htmlFor="description">Текст</label>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <a class="waves-effect waves-light btn" onClick={closeModal}>
              Create
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
