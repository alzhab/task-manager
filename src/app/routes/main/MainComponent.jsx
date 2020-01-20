import React, { useState, useEffect } from "react";

// Layouts
import { Navbar, Modal } from "./layouts";

// Компоненты
import { Toast, PostCard, Pagination, Sort } from "./components";

const Main = props => {
  useEffect(() => {
    props.tasksFetch();
  }, []);

  const changePaginationHandler = number => {
    props.tasksFetch({
      page: number
    });
  };

  const [modalOpen, setModalOpen] = useState(false);

  const modal = modalOpen ? (
    <Modal closeModal={() => setModalOpen(false)} />
  ) : null;
  const pagination =
    props.totalCount > 3 ? (
      <Pagination
        changePagination={changePaginationHandler}
        totalCount={props.totalCount}
        activePagination={props.activePagination}
      />
    ) : null;
  const toast = props.error.trim().length ? (
    <Toast message={props.error} />
  ) : null;
  const content = props.tasks.length ? (
    <div className="row pt3">
      <div className="col s12 m6 offset-m3">
        <div className="row">
          <Sort />
        </div>

        <div className="row">
          {props.tasks.map((task, index) => (
            <PostCard data={task} key={index} />
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
      <Navbar modalOpen={() => setModalOpen(true)} />
      {modal}
      {toast}
      {props.isLoading ? <p>Загрузка данных...</p> : content}
    </React.Fragment>
  );
};

export default Main;
