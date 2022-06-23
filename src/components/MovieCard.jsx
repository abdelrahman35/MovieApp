import React from "react";
import { Link } from "react-router-dom";
export default function MovieCard(props) {
  return (
    <>
      <div className="card shadow" style={{ width: "18rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          className="card-img-top"
          alt={props.title}
          style={{ height: "20em", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.movie.title}</h5>
          <hr />
          <p
            className="card-text"
            style={{
              height: "12em",

              objectFit: "contain",
              overflow: "hidden",
            }}
          >
            {props.movie.overview}
          </p>
          <Link
            to={`/movies/${props.movie.id}`}
            className="btn btn-primary col-12"
          >
            view more
          </Link>
          <hr />
          <div style={{ textAlign: "center" }}>
            <span className="p-1" style={{ borderRight: "1px solid grey" }}>
              Adult: {props.movie.adult ? "Yes" : "No"}
            </span>
            <span className="m-1">rate: {props.movie.vote_average}</span>
          </div>
        </div>
      </div>
    </>
  );
}
