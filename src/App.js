import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import TutorialsList from "./components/tutorials-list.component.js";
import Tutorial from "./components/tutorial.component.js";
import AddTutorial from "./components/add-tutorial.component.js";

import { Link, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
              <a class="navbar-brand" href="#">
                App CRUD
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link class="nav-link" to={"/"}>
                      Accueil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/tutorials"} className="nav-link">
                      Tutoriels
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/add"} className="nav-link">
                      Nouveau
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<TutorialsList />} />
            <Route exact path="/tutorials" element={<TutorialsList />} />
            <Route exact path="/add" element={<AddTutorial />} />
            <Route exact path="/tutorials/:id" element={<Tutorial />} />
          </Routes>
        </div>
      </div>
    );
  }
}
export default App;
