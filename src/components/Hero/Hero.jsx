import React from "react";
import Header from "../Header/Header";
import "./hero.css";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <>
      <div className="hero" id="hero">
        <div className="left-h">
          <Header />
          <div className="hero-text container">
            <div>
              <span>Donsoft</span>
            </div>
            <div className="about">
              <p>
                #donsoft #dev #programming #coding #backend #server #frontend
                #mobile #app #flutter #dart #bloc #http #dio #request
                #localization #json #intl #sdk #svg #rest #freezed #equatable
                #java #spring #deploy #scrum #agile #react #redux
              </p>
            </div>
          </div>
          <div className="technologies container">
            <div className="grid">
              <div className="gridHeading">
                <i className="fas fa-desktop"></i>
                <h4>Front-end</h4>
              </div>
              <hr />
              <div className="icon-images">
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <div className="gridHeading">
                <i className="fas fa-terminal"></i>
                <h4>Back-end</h4>
              </div>
              <hr />
              <div className="icon-images">
                <ul>
                  <li>NodeJs</li>
                  <li>TypeScript</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <div className="gridHeading">
                <i className="fas fa-database"></i>
                <h4>Database</h4>
              </div>
              <hr />
              <div className="icon-images">
                <ul>
                  <li>SQL</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <div className="gridHeading">
                <i className="fas fa-mobile"></i>
                <h4>Mobile</h4>
              </div>
              <hr />
              <div className="icon-images">
                <ul>
                  <li>Flutter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
