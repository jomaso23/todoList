import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="GStyle m-2">
      Profile, crear funcionalidad para dos botones, como componente, funcion??
      <h1>Profile</h1>
      <button
        className="btnStyle btn btn-primary m-2"
        onClick={() => navigate(-1)}
      >
        Home
      </button>
      <button
        className="btnStyle btn btn-primary"
        onClick={() => navigate("/Task")}
      >
        Tasks
      </button>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
