import logo from "./logo.svg";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Menu from "./components/Menu/Menu";
import ProfilePage from "./pages/Profile/ProfilePage";
import TaskPage from "./pages/Task/TaskPage";
import AboutPage from "./pages/About/AboutPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/Login&Register/LoginPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ForwBackButton from "./components/Buttons/ForwBackButton";
import "./Styles/appStyles.scss";
const App = () => {
  const user = useSelector((state) => state.user);
  //const log = true;

  // useEffect(() => {
  //   console.log(user.log);
  // }, [user.log]);
  return (
    <div className="App ">
      <header className="App-header">
        <nav style={{ backgroundcolor: "grey" }}>
          <Menu></Menu>
        </nav>
      </header>
      <div className="GStyle2 ">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {user.log ? (
            <>
              <Route path="/Profile" element={<ProfilePage />} />
              {/* <Route path="/Task" element={<TaskPage />} /> */}
            </>
          ) : (
            <Route path="/Login&Register" element={<LoginPage />} />
          )}
          <Route path="/Task" element={<TaskPage />} />
          <Route path="/Login&Register" element={<LoginPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ForwBackButton />
      </div>

      <footer className="App-footer">
        links que conducen hacia otras redes
      </footer>
    </div>
  );
};

export default App;
