import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "./lib/nav.js";
import bg from "./img/bg.png";
import Imagebox from "./lib/Col.js";
import data from "./lib/data.js";
import Detail from "./routes/Detail.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [map] = useState(data);
  return (
    <div className="App">
      <Navbar className="dark"></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
              <Imagebox data={map}></Imagebox>
              <Link to="/detail">상세페이지</Link>
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <>
              <div>about</div>
              <Detail data={map} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
