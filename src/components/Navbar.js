import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-sm py-3`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4 text-primary-emphasis" to="/">
          <span style={{ color: props.mode === 'dark' ? '#00d9ff' : '#0056b3' }}>
            {props.title}
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-semibold nav-underline-hover" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold nav-underline-hover" to="/analyze">
                Analyze
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold nav-underline-hover" to="/about">
                About
              </Link>
            </li>
          </ul>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} d-flex align-items-center`}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.togglemode}
              id="checkNativeSwitch"
              style={{ cursor: 'pointer' }}
            />
            <label className="form-check-label ms-2" htmlFor="checkNativeSwitch">
              {props.mode === 'light' ? 'Dark' : 'Light'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextUtils",
};
