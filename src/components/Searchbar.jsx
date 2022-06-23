import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Searchbar(props) {
  const history = useHistory();
  const [search, setSearch] = useState("");

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
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={() => {
            history.push("/movies", { keyword: search });
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
