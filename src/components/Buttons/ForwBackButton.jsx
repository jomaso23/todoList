import React from "react";
import { useNavigate } from "react-router";

const ForwBackButton = () => {
  const navigate = useNavigate();

  return (
    <div className=" GStyle3 ">
      <button
        className=" btn btn-primary btnStyle2 btnStyleLocal    "
        onClick={() => navigate(-1)}
      >
        {"<<"}
      </button>
      <button
        className=" btn btn-primary btnStyle2 "
        onClick={() => navigate(+1)}
      >
        {">>"}
      </button>
    </div>
  );
};

export default ForwBackButton;
