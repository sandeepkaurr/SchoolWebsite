import React from "react";
import "./style.css";
function Gallery() {
  return (
    <>
      <div div style="background-image: radial-gradient(green,white);">
        {" "}
      </div>
      <nav>
        <a href="index.html">
          <img src="images/WhatsApp Image 2024-07-10 at 23.00.33_2135f5d7.jpg" />
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
              <a href="">
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
      <div class="container">
        {/* <div class="jumbotron p-25 m-25 bg-secondary"> */}
        <h1 style="text-align: center  ;  color:palegreen">Image Gallery</h1>
        <p style="text-align: center; font-size: medium; color: white; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
          Images of school events
        </p>
      </div>
      {/* </div> */}
      <div class="gallery">
        <a target="_blank" href="./images/college-2883655_1280.jpg">
          <img
            src="./images/college-2883655_1280.jpg "
            width="600"
            height="600"
          ></img>
        </a>
        <div class="desc">Lorem ipsum dolor sit amet.</div>
      </div>
      <div class="gallery">
        <a target="_blank" href="./images/college-2883655_1280.jpg">
          <img src="./images/istockphoto-1162166565-612x612.jpg "></img>
        </a>
        <div class="desc">Lorem ipsum dolor sit amet.</div>
      </div>
      <div class="gallery">
        <a target="_blank" href="./images/university-105709_1280.jpg">
          <img src="./images/university-105709_1280.jpg"></img>
        </a>
        <div class="desc">Lorem ipsum dolor sit amet.</div>
      </div>
      <div class="gallery">
        <a target="_blank" href="./images/university-2704306_640.jpg">
          <img src="./images/university-2704306_640.jpg "></img>
        </a>
        <div class="desc">Lorem ipsum dolor sit amet.</div>
      </div>
      <div class="gallery">
        <a target="_blank" href="./images/university-2704306_640.jpg">
          <img src="./images/university-2704306_640.jpg "></img>
        </a>
        <div class="desc">Lorem ipsum dolor sit amet.</div>
      </div>{" "}
      <div class="gallery">
        <a target="_blank" href="./images/student-4369850_1280.jpg">
          <img src="./images/student-4369850_1280.jpg "></img>
        </a>
        <div class="desc">Lorem ipsum dolor sit amet.</div>
      </div>
    </>
  );
}

export default Gallery;
