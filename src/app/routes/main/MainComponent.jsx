import React, { useState, useEffect } from "react";
// Layouts
import { Navbar, Modal } from "./layouts";

// Компоненты
import { Toast, PostCard, Pagination, Sort, Loader } from "./components";
import Axios from "axios";

const Main = props => {
  useEffect(() => {
    props.tasksFetch();
  }, []);

  const changePaginationHandler = number => {
    props.changePagination(number);
    props.tasksFetch();
  };

  const changeSortFieldHandler = sort => {
    props.changeSortField(sort);
    props.tasksFetch();
  };

  const changeSortFieldDirHandler = dir => {
    if (dir === "desc") {
      props.changePagination(1);
    } else {
      props.changePagination(Math.ceil(props.totalCount / 3));
    }

    props.changeSortDir(dir);
    props.tasksFetch();
  };

  const editTaskHandler = task => {
    const form = new FormData();
    form.append("text", task.text);
    form.append("status", task.status);
    form.append("token", props.authToken);

    console.log(task);

    Axios({
      method: "post",
      url: `https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${task.id}/?developer=abdalz`,
      data: form
    })
      .then(res => {
        console.log(res.data);

        if (res.data.status === "ok") {
          props.addMessage("Задача обновлена");
          props.tasksFetch();
          setTimeout(() => {
            props.addMessage("");
          }, 1500);
        }
      })
      .catch(err => {});
  };

  const [modalOpen, setModalOpen] = useState(false);

  const modal = modalOpen ? (
    <Modal
      closeModal={() => setModalOpen(false)}
      refreshTasks={props.tasksFetch}
      addAlertMessage={props.addMessage}
    />
  ) : null;

  const pagination =
    props.totalCount > 3 ? (
      <Pagination
        changePagination={changePaginationHandler}
        totalCount={props.totalCount}
        activePagination={props.activePagination}
      />
    ) : null;

  const toast = props.message.trim().length ? (
    <Toast message={props.message} />
  ) : null;

  const content = props.tasks.length ? (
    <div className="row pt3">
      <div className="col s12 m6 offset-m3">
        <div className="row">
          <Sort
            value={props.sortField}
            changedField={changeSortFieldHandler}
            changedDir={changeSortFieldDirHandler}
            activeDir={props.sortDirection}
          />
        </div>

        <div className="row">
          {props.tasks.map((task, index) => (
            <PostCard
              data={task}
              key={index}
              authorized={props.authToken !== null}
              editTask={editTaskHandler}
              logout={props.logout}
            />
          ))}
        </div>

        <div className="row">{pagination}</div>
      </div>
    </div>
  ) : (
    <p>Нет ни одной задачи</p>
  );

  return (
    <React.Fragment>
      <Navbar
        modalOpen={() => setModalOpen(true)}
        authToken={props.authToken}
        logout={props.logout}
      />
      {modal}
      {toast}
      {props.isLoading ? (
        <div className="center pt3">
          <Loader />
        </div>
      ) : (
        content
      )}
    </React.Fragment>
  );
};

export default Main;
