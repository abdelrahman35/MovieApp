import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  return (
    <div>
      <div className="card shadow " style={{ width: "18rem", height: "28rem" }}>
        <div
          className="card-header bg-warning shadow  "
          style={{ textAlign: "center" }}
        >
          <span className="m-1"> {props.movie.vote_average}</span>
          <i className="fa-solid fa-star"></i>
        </div>
        <Link to={`/movies/${props.movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
            className="card-img-top"
            alt={props.title}
            style={{ height: "20em", objectFit: "cover" }}
          />
        </Link>

        <div className="card-body bg-">
          <h5 className="card-title text-center">{props.movie.title}</h5>
        </div>
      </div>
    </div>
  );
}
