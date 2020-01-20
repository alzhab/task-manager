import React, { useRef, useState } from "react";
import Axios from "axios";

const Modal = ({ closeModal, addAlertMessage, refreshTasks }) => {
  const [message, setMessage] = useState({ email: "", text: "", username: "" });

  const username = useRef(null);
  const email = useRef(null);
  const description = useRef(null);

  const formSubmitHandler = e => {
    e.preventDefault();

    const form = new FormData();
    form.set("username", username.current.value);
    form.set("email", email.current.value);
    form.set("text", description.current.value);

    Axios({
      method: "post",
      url:
        "https://uxcandy.com/~shapoval/test-task-backend/v2/create/?developer=abdalz",
      data: form
    })
      .then(res => {
        if (!res.data.message.id) {
          setMessage({
            ...res.data.message
          });
        } else {
          addAlertMessage("Задача добавлена");
          refreshTasks()
          setTimeout(() => {
            addAlertMessage("");
          }, 1500);
          closeModal();
        }
      })
      .catch(err => {});
  };

  return (
    <React.Fragment>
      <div
        className="modal-overlay"
        style={{
          zIndex: 1002,
          display: "block",
          opacity: 0.5
        }}
        onClick={closeModal}
      ></div>
      <div
        className="modal open"
        style={{
          zIndex: 1003,
          display: "block",
          opacity: 1,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <div className="modal-content">
          <h4>Создать Задачу</h4>
          <div className="row">
            <form className="col s12" onSubmit={formSubmitHandler}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="username"
                    type="text"
                    className="validate"
                    ref={username}
                  />
                  <label htmlFor="username">Имя</label>
                  {message.username && (
                    <span
                      className="helper-text"
                      data-error="wrong"
                      style={{ color: "red" }}
                    >
                      {message.username}
                    </span>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="text"
                    className="validate"
                    ref={email}
                  />
                  <label htmlFor="email">Email</label>
                  {message.email && (
                    <span
                      className="helper-text"
                      data-error="wrong"
                      style={{ color: "red" }}
                    >
                      {message.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="description"
                    className="materialize-textarea"
                    length="140"
                    ref={description}
                  ></textarea>
                  <label htmlFor="description">Текст</label>
                  {message.text && (
                    <span
                      className="helper-text"
                      data-error="wrong"
                      style={{ color: "red" }}
                    >
                      {message.text}
                    </span>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="waves-effect waves-light btn">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
