import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavourites,
  removeFromFavourites,
} from "../store/actions/favouritesAction";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function MovieCard(props) {
  const dispatch = useDispatch();
  const addToFav = () => {
    dispatch(addToFavourites(props.movie));
  };
  const favMovies = useSelector(
    (state) => state.favouritesReducer.favouriteMovies
  );

  const removeFromFav = () => {
    dispatch(removeFromFavourites(props.movie));
  };

  return (
    <div>
      {favMovies?.find((m) => m.id === props.movie.id) ? (
        <AiFillHeart onClick={removeFromFav} />
      ) : (
        <AiOutlineHeart onClick={addToFav} />
      )}
      <div className="card shadow " style={{ width: "18rem", height: "28rem" }}>
        <div
          className="card-header bg-warning shadow  "
          style={{ textAlign: "center" }}
        >
          <span className="m-1"> {props.movie.vote_average}</span>
          <i className="fa-solid fa-star"></i>
        </div>
        <div>
          {/* {favMovies?.find((m) =>
            m.movie.id === props.movie.id ? (
              <AiFillHeart />
            ) : (
              <>
                <AiOutlineHeart onClick={addToFav} />
              </>
            )
          )} */}
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
