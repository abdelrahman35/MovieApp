import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/movies"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/fav">
                  Favourites
                </Link>
              </li>
            </ul>
            <Searchbar />
          </div>
        </div>
      </nav>
    </>
  );
}
