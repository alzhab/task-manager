import React, { useState } from "react";

// Layouts
import { Navbar, Modal } from "./layouts";

// Компоненты
import { Toast, PostCard, Pagination, Select } from "./components";

const Main = props => {
  const [modalOpen, setModalOpen] = useState(false);

  const modal = modalOpen ? (
    <Modal closeModal={() => setModalOpen(false)} />
  ) : null;

  return (
    <React.Fragment>
      <Navbar modalOpen={() => setModalOpen(true)} />
      {modal}
      {/* <Toast /> */}
      <div className="row pt3">
        <div class="col s12 m6 offset-m3">
          <div className="row">
            <Select />
          </div>

          <div className="row">
            <PostCard />
          </div>

          <div className="row">
            <Pagination />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
