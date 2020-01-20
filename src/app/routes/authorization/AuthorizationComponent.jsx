import React, { useRef } from "react";
import { Loader } from "./components";
import { Redirect } from "react-router-dom";

const Authorization = props => {
  const name = useRef(null);
  const password = useRef(null);

  const submitHandler = e => {
    e.preventDefault();
    props.loginFetch({
      username: name.current.value,
      password: password.current.value
    });
  };

  const goHomeHandler = () => {
    props.history.push("/");
  };

  const checkRedirect = props.token ? (
    <Redirect to="/" />
  ) : (
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
          {props.isLoading ? <Loader /> : null}

          <div className="row"></div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">mail_outline</i>
              <input className="validate" id="name" type="text" ref={name} />
              <label htmlFor="name" data-error="wrong" data-success="right">
                Name
              </label>
              {props.message.username && (
                <span
                  className="helper-text"
                  data-error="wrong"
                  style={{ color: "red" }}
                >
                  {props.message.username}
                </span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock_outline</i>
              <input id="password" type="password" ref={password} />
              <label htmlFor="password">Password</label>
              {props.message.password && (
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                  style={{ color: "red" }}
                >
                  {props.message.password}
                </span>
              )}
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
              <button
                type="button"
                className="btn btn-flat waves-effect waves-light col s12 mt1"
                onClick={goHomeHandler}
              >
                Home
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  return checkRedirect;
};

export default Authorization;
