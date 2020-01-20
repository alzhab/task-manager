import React from "react";

const Authorization = ({ history }) => {
  const submitHandler = () => {
    history.push("/");
  };

  return (
    <div
      className="row"
      style={{
        width: "500px",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%"
      }}
    >
      <div className="col s12 z-depth-6 card-panel">
        <form className="login-form" onSubmit={submitHandler}>
          <div className="row"></div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">mail_outline</i>
              <input className="validate" id="name" type="text" />
              <label htmlFor="name" data-error="wrong" data-success="right">
                Name
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock_outline</i>
              <input id="password" type="password" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <button
                type="submit"
                className="btn waves-effect waves-light col s12"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authorization;
