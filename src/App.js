/*eslint-disable*/

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Navbar from "./lib/nav.js";
import bg from "./img/bg.png";
import Imagebox from "./lib/Col.js";
import data from "./lib/data.js";
import Detail from "./routes/Detail.js";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  let [map, setMap] = useState(data);
  let [more, setMore] = useState(1);
  useEffect(() => {
    axios
      .get("http://localhost:3000/data.json")
      .then((data) => {
        let copy = map;
        data.data.map((d) => {
          copy.push(d);
        });
        setMap(copy);
      })
      .catch(() => {
        console.log("ajax 요청 실패");
      });
  }, [more]);
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
              <button
                onClick={() => {
                  setMore(more + 1);
                }}
              >
                버튼
              </button>
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
