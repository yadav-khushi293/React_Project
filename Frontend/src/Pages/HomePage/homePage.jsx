/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../App.css";

export const HomePage = () => {
  const images = [
    "/Utilis/Homepage1(Corosal).webp",
    "/Utilis/Homepage2(Corosal).webp",
    "/Utilis/Homepage3(Corosal).webp",
    "/Utilis/Homepage4(Corosal).webp",
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Next

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Previous

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

useEffect(() => {
  const nextIndex = (current + 1) % images.length;
  const img = new Image();
  img.src = images[nextIndex];
}, [current]);

return (
  <div className="home_page">
    {/* Corusel */}

    <div className="corusel">
      <img src={images[current]} alt="Corusel" loading="lazy" />

      <button className="prev" onClick={prevSlide}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <button className="next" onClick={nextSlide}>
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>

    <img
      src="/Utilis/Homepage.webp"
      alt="Homepage Image"
      className="home_page_img"
    />

    {/* Category Section */}

    <div className="category">
      <div className="category_1">
        <img
          src="/Utilis/Category1.webp"
          alt="Category Image 1"
          className="category_img1"
        />

        <div className="category_text">
          <p className="category_p">Footwear</p>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>

      <div className="category_2">
        <img
          src="/Utilis/Category2.webp"
          alt="Category Image 2"
          className="category_img2"
        />

        <div className="category_text">
          <p className="category_p">Clothing</p>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>

      <div className="category_3">
        <img
          src="/Utilis/Category3..jpg"
          alt="Category Image 3"
          className="category_img3"
        />

        <div className="category_text">
          <p className="category_p">New Arrival</p>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>

      <div className="category_4">
        <img
          src="/Utilis/Category4.webp"
          alt="Category Image 4"
          className="category_img4"
        />

        <div className="category_text">
          <p className="category_p">Accesories</p>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>

    <img
      src="/Utilis/Summer_Walk.webp"
      alt="HomePage Image 2"
      className="home_page_img2"
    />

    {/* Collection */}

    <div className="collection">
      <img
        src="/Utilis/Collection1.webp"
        alt="Collection Image 1"
        className="collection_img1"
      />
      <img
        src="/Utilis/Collection2.webp"
        alt="Collection Image 2"
        className="collection_img2"
      />
    </div>

    {/* Trending */}

    <div className="trending">
      <h5>Trending Now</h5>
      <img
        src="/Utilis/Scroll_Image1.jpg"
        alt="Trending Image 1"
        className="trending_img1"
      />
      <img
        src="/Utilis/Scroll_Image2.jpg"
        alt="Trending Image 2"
        className="trending_img2"
      />
      <img
        src="/Utilis/Scroll_Image3.jpg"
        alt="Trending Image 3"
        className="trending_img3"
      />
      <img
        src="/Utilis/Scroll_Image4.jpg"
        alt="Trending Image 4"
        className="trending_img4"
      />
      <img
        src="/Utilis/Scroll_Image5.jpg"
        alt="Trending Image 5"
        className="trending_img5"
      />
      <img
        src="/Utilis/Scroll_Image6.jpg"
        alt="Trending Image 6"
        className="trending_img6"
      />
    </div>

    {/* Scroll Images */}

    <div className="scroll">
      <img
        src="/Utilis/Scroll_Image1.jpg"
        alt="Scroll Image 1"
        className="scroll_img1"
      />
      <img
        src="/Utilis/Scroll_Image2.jpg"
        alt="Scroll Image 2"
        className="scroll_img2"
      />
      <img
        src="/Utilis/Scroll_Image3.jpg"
        alt="Scroll Image 3"
        className="scroll_img3"
      />
      <img
        src="/Utilis/Scroll_Image4.jpg"
        alt="Scroll Image 4"
        className="scroll_img4"
      />
      <img
        src="/Utilis/Scroll_Image5.jpg"
        alt="Scroll Image 5"
        className="scroll_img5"
      />
      <img
        src="/Utilis/Scroll_Image6.jpg"
        alt="Scroll Image 6"
        className="scroll_img6"
      />
    </div>

    <video src="/Utilis/795cffa3c24f44c78e580a67427a917f.SD-480p-1.0Mbps-80004966.mp4"></video>

    {/* Last Banner */}

    <img
      src="/Utilis/Down_Banner.jpg"
      alt="Last Banner"
      className="last_banner"
    />
  </div>
);
};
