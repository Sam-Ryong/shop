/*eslint-disable*/

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, createContext } from "react";
import Navbar from "./lib/nav.js";
import bg from "./img/bg.png";
import Imagebox from "./lib/Col.js";
import data from "./lib/data.js";
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart.js";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

export let Context1 = createContext(); //state 보관함, 다른파일에서 쓸수 있게 export

function App() {
  let [map, setMap] = useState(data);
  let [more, setMore] = useState(1);
  let [alert, setAlert] = useState(false);
  let [load, setLoad] = useState(false);
  let [stock, setStock] = useState([10, 11, 12]);
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
                  if (more > 3) {
                    setAlert(true);
                  } else {
                    setLoad(true);
                    axios
                      .get(`http://localhost:3000/data${more}.json`)
                      .then((data) => {
                        let copy = [...map, ...data.data];
                        setMap(copy);
                        setMore(more + 1);
                        setLoad(false);
                      })
                      .catch(() => {
                        console.log("ajax 요청 실패");
                        setLoad(false);
                      });
                  }
                }}
              >
                더보기
              </button>
              {load ? <div>로딩중</div> : null}
              {alert ? <div>보여줄게 더 엄슴미다</div> : null}
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <>
              <div>about</div>
              <Context1.Provider value={{ stock }}>
                <Detail data={map} />
              </Context1.Provider>
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
