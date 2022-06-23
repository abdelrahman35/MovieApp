import React, { useEffect, useState } from "react";
import axiosInstance from "../network/axiosInstance";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const [details, setDetails] = useState({});
  const history = useHistory();

  const params = useParams();
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((response) => {
        setDetails(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [params.id]);
  return (
    <div className="container mt-5">
      <div className="">
        <button onClick={() => history.goBack()} className="btn btn-dark">
          Go Back
        </button>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            alt={details.title}
            style={{ height: "25rem" }}
          />
        </div>
        <div className="col-6">
          <h1>{details.title}</h1>
          <span>Rating: {details.vote_average}</span>
          <p>Original Language: {details.original_language}</p>
          <hr />
          <h5>overiew:</h5>
          <p> {details.overview}</p>
        </div>
      </div>
    </div>
  );
}
/**
 * 
 * adult: false
backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg"
belongs_to_collection: {id: 230, name: 'The Godfather Collection', poster_path: '/9Baumh5J9N1nJUYzNkm0xsgjpwY.jpg', backdrop_path: '/3WZTxpgscsmoUk81TuECXdFOD0R.jpg'}
budget: 6000000
genres: (2) [{…}, {…}]
homepage: "http://www.thegodfather.com/"
id: 238
imdb_id: "tt0068646"
original_language: "en"
original_title: "The Godfather"
overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge."
popularity: 75.334
poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
production_companies: (2) [{…}, {…}]
production_countries: [{…}]
release_date: "1972-03-14"
revenue: 245066411
runtime: 175
spoken_languages: (3) [{…}, {…}, {…}]
status: "Released"
tagline: "An offer you can't refuse."
title: "The Godfather"
video: false
vote_average: 8.7
vote_count: 16100
 */
