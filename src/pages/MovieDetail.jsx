import React, { useEffect, useState } from "react";
import axiosInstance from "../network/axiosInstance";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";

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
      <GoBackButton></GoBackButton>
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
