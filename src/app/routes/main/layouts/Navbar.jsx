import React from "react";
import { withRouter, Link } from "react-router-dom";

const Navbar = ({ modalOpen, authToken, logout }) => {
  return (
    <nav>
      <div className="nav-wrapper px1">
        <Link to="/" className="brand-logo">
          TaskManager
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a onClick={modalOpen}>Create Task</a>
          </li>
          {authToken ? (
            <li>
              <a onClick={logout}>Sign Out</a>
            </li>
          ) : (
            <li>
              <Link to="sign-in">Sign In</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
