import React from "react";

export default function Searchbar() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {" "}
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
