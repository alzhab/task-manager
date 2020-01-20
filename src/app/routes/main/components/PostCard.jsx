import React, { useState, useRef } from "react";
import { withRouter } from "react-router-dom";

const PostCard = ({ data, editTask, history, logout }) => {
  const text = useRef(null);
  const authorized = localStorage.getItem("token");
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(data.status);

  return (
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content">
          <div className="row">
            <h6 className="m0 col s6">Имя пользователя: {data.username}</h6>
            <h6 className="m0 col s6">Email: {data.email}</h6>
          </div>
          {edit ? (
            <React.Fragment>
              <p>Текст задачи</p>
              <textarea
                className="materialize-textarea"
                length="140"
                defaultValue={data.text}
                ref={text}
              ></textarea>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p>Текст задачи</p>
              <p>{data.text}</p>
            </React.Fragment>
          )}
        </div>
        <div
          className="card-action"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          {edit ? (
            <React.Fragment>
              <p className="m0">
                Status: {status ? "Выполнено" : "Не Выполнен"}
              </p>
              <button
                className="waves-effect waves-light btn"
                onClick={() =>
                  setStatus(last => {
                    if (last) {
                      return 0;
                    } else {
                      return 10;
                    }
                  })
                }
              >
                Сменить статус
              </button>
            </React.Fragment>
          ) : (
            <p className="m0">Status: {status ? "Выполнено" : "Не Выполнен"}</p>
          )}

          {authorized ? (
            edit ? (
              <button
                className="waves-effect waves-light btn"
                onClick={() => {
                  console.log(localStorage.getItem("token"));

                  if (localStorage.getItem("token")) {
                    if (
                      data.text !== text.current.value ||
                      data.status !== status
                    ) {
                      if (data.text !== text.current.value) {
                      }
                      editTask({
                        id: data.id,
                        status,
                        text:
                          text.current.value +
                          ". Отредактировано Администратором"
                      });
                    }
                    setEdit(false);
                  } else {
                    logout();
                    history.push("/sign-in");
                  }
                }}
              >
                Изменить
              </button>
            ) : (
              <button
                className="waves-effect waves-light btn"
                onClick={() => {
                  if (localStorage.getItem("token")) {
                    setEdit(true);
                  } else {
                    logout();
                    history.push("/sign-in");
                  }
                }}
              >
                Отредактировать
              </button>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default withRouter(PostCard);
