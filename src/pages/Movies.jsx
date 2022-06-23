import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import axiosInstance from "../network/axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const location = useLocation();
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    console.log(location, "ssssssss");
    location.state ? setKeyword(location.state.keyword) : setKeyword("");
    if (keyword) {
      axiosInstance
        .get(`/search/movie`, { params: { query: keyword, page: pageNum } })
        .then((response) => {
          setMovies(response.data.results);
          console.log(response.data);
        });
    } else {
      axiosInstance
        .get("/movie/top_rated", { params: { page: pageNum } })
        .then((response) => {
          setMovies(response.data.results);
        });
    }
  }, [pageNum, keyword, location]);
  const nextPage = () => {
    let pageNumber;
    pageNumber = pageNum;
    if (pageNum < 522) {
      pageNumber++;
    }
    setPageNum(pageNumber);
  };
  const prevPage = () => {
    let pageNumber;
    pageNumber = pageNum;
    if (pageNum > 1) {
      pageNumber--;
    }
    setPageNum(pageNumber);
  };

  // "total_pages": 502,
  return (
    <div className="container ">
      <div className="row p-5 m-4">
        {movies.map((movie, index) => (
          <div key={index} className="col-4 p-2">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation example bg-dark text-dark">
        <ul className="pagination jsutify-content-center">
          <li className="page-item  ">
            <Link
              to="#"
              className="page-link text-dark bg-outline-dark"
              onClick={() => {
                prevPage();
              }}
            >
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link
              to="#"
              className="page-link text-dark bg-outline-dark"
              onClick={() => {
                prevPage();
              }}
            >
              {pageNum}
            </Link>
          </li>

          <li className="page-item">
            <Link
              className="page-link text-dark bg-outline-dark"
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
