import React from "react";
//import TaskCard from "../components/Card/TaskCard";
//import TaskCard from "../components/TaskCard";
import TaskCard from "../../components/Card/TaskCard";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import "../../Styles/appStyles.scss";
const Home = () => {
  //!!variable provisional(isLogged), de escuchar al Store
  const isLogged = true;
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <div className="GStyle">
      <h1>Este es el homePage</h1>
      <button
        className=" btn btn-primary btnStyle"
        onClick={() =>
          user.log
            ? navigate("/Profile")
            : navigate("/Login&Register") + alert("log first")
        }
      >
        Profile!
      </button>
      {/* <TaskCard></TaskCard> */}
    </div>
  );
};

export default Home;
