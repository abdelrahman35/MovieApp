import React from "react";
import { useHistory } from "react-router-dom";

export default function GoBackButton() {
  const history = useHistory();

  return (
    <button onClick={() => history.goBack()} className="btn btn-dark">
      Go Back
    </button>
  );
}
