import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//pages
import Users from "./components/Users";
import About from "./components/About";
import Home from "./components/Home";
import User from "./components/User";



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/users"> Users </Link>
            </li>
          </ul>
        </nav>


        <Routes>

          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Users />} path="/users" />
          <Route element={<User />} path="/user/:id" />


        </Routes>
      </div>
    </Router>

  );


}

export default App;
