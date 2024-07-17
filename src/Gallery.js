import React, { useState } from "react";
import "./style.css";
const images = [
  "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6538a59979b38b001da271fd.jpg",
  "https://jischoolerp.com/blog/image/13/post-1530508718-image_fileuser_id_2.png",
  "https://appedology.com/uploads/images/2021/02/importance-of-school-management-system_750x.jpg",
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5t9PQ1flVvKpMb4jbf5c3ulAbRtRYpepng&s",
  "https://repository-images.githubusercontent.com/320789182/05666c80-6fbe-11eb-8159-9c143259a9aa",
  "https://theknowledgereview.com/wp-content/uploads/2021/11/management-software.jpg",
  "https://codecanyon.img.customer.envatousercontent.com/files/488823188/inline.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=e265530afaa54a6937a36a4fbe7b3dfe",
];
function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <nav>
        <a href="Home.html">
          <img
            src="WhatsApp Image 2024-07-10 at 23.00.33_2135f5d7.jpg"
            alt="img"
          />
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
      <div className="gallery">
        <button onClick={prevImage}>&lt;</button>
        <img src={images[currentImage]}></img>
        <button onClick={nextImage}>&gt;</button>
      </div>
    </>
  );
}

export default Gallery;
