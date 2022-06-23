import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import axiosInstance from "../network/axiosInstance";
import SearchBar from "../components/Searchbar";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    axiosInstance
      .get("/movie/top_rated", { params: { page: pageNum } })
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data);
      });
  }, [pageNum]);
  const nextPage = () => {
    let pageNumber;
    pageNumber = pageNum;
    pageNumber++;
    setPageNum(pageNumber);
  };
  const prevPage = () => {
    let pageNumber;
    pageNumber = pageNum;
    pageNumber--;
    setPageNum(pageNumber);
  };
  // "total_pages": 502,
  return (
    <div className="container mt-4">
      <h2>Movies</h2>
      <div className="row p-5 m-4">
        {movies.map((movie, index) => (
          <div key={index} className="col-4 p-2">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link
              to="#"
              className="page-link"
              onClick={() => {
                prevPage();
              }}
            >
              Previous
            </Link>
          </li>

          <li className="page-item">
            <Link
              className="page-link"
              to="#"
              onClick={() => {
                setPageNum(1);
              }}
            >
              1
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link"
              to="#"
              onClick={() => {
                setPageNum(2);
              }}
            >
              2
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link"
              to="#"
              onClick={() => {
                setPageNum(3);
              }}
            >
              3
            </Link>
          </li>

          <li className="page-item">
            <Link
              className="page-link"
              to="#"
              onClick={() => {
                nextPage();
              }}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
