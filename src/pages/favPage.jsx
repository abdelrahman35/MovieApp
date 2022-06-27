import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import GoBackButton from "../components/GoBackButton";

export default function FavPage() {
  const favMovies = useSelector(
    (state) => state.favouritesReducer.favouriteMovies
  );

  return (
    <>
      <div className="container mt-5 ">
        <GoBackButton />
        <div className="row p-5 m-4">
          {favMovies?.map((movie, index) => (
            <div key={index} className="col-4 p-2">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
