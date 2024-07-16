import React from "react";
import Gallery from "./Gallery";
import { Routes, Route } from "react-router-dom";

import "./style.css";
function Indexx() {
  return (
    <>
      <Routes>
        <Route path="/Gallery" Component={Gallery.js}></Route>
      </Routes>
      <section className="header">
        <nav>
          <a href="Home.html">
            <img src="WhatsApp Image 2024-07-10 at 23.00.33_2135f5d7.jpg"></img>
          </a>
          <div className="nav-links">
            <ul>
              <li>
                <a href="">
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a href="">Abouts</a>
              </li>
              <li>
                <a href="Gallery.js">
                  <b>Gallery</b>
                </a>
              </li>
              <li>
                <a href="">
                  <b>Resources</b>
                </a>
              </li>
              <li>
                <a href="">
                  <b>How it Works</b>
                </a>
              </li>

              <li>
                <a href="">
                  <b>Login/Logout</b>
                </a>
              </li>
              <li>
                <a href="">
                  <b>Contact</b>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="text-box">
          <h1>Inspiring Minds,Trasforming Lives</h1>
          <p>
            The management functions that are used in a school system is
            planning, organising, leading and controlling. Creating a school
            website involves several key steps .
          </p>
          <a href="" class="hero-btn">
            Visit us to know more
          </a>
        </div>
      </section>
    </>
  );
}
export default Indexx;
