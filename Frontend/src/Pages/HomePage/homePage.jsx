/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../../App.css";

export const HomePage = () => {
  const images = [
    "/Utilis/Homepage5(Corosal).jpg",
    "/Utilis/Homepage1(Corosal).jpg",
    "/Utilis/Homepage2(Corosal).jpg",
    "/Utilis/Homepage3(Corosal).jpg",
    "/Utilis/Homepage4(Corosal).jpg",
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

  // Infinite Scroll Images

  const scrollImages = [
    "/Utilis/Scroll_Image1.jpg",
    "/Utilis/Scroll_Image2.jpg",
    "/Utilis/Scroll_Image3.jpg",
    "/Utilis/Scroll_Image4.jpg",
    "/Utilis/Scroll_Image5.jpg",
    "/Utilis/Scroll_Image6.jpg",
  ];

  // Video

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    videoRef.current.play().catch(() => {});
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

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
        loading="lazy"
      />

      {/* Category Section */}

      <div className="category">
        <NavLink to="/men_footware">
          <div className="category_1">
            <div className="category_img1">
              <img
                src="/Utilis/Category1.webp"
                alt="Category Image 1"
                className="category_img1"
                loading="lazy"
              />
            </div>

            <div className="category_text">
              <p className="category_p">Footwear</p>
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </NavLink>

        <NavLink to="/men_topware">
          <div className="category_2">
            <div className="category_img2">
              <img
                src="/Utilis/Category2.webp"
                alt="Category Image 2"
                className="category_img2"
                loading="lazy"
              />
            </div>

            <div className="category_text">
              <p className="category_p">Clothing</p>
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </NavLink>

        <NavLink to="/">
          <div className="category_3">
            <div className="category_img3">
              <img
                src="/Utilis/Category3..jpg"
                alt="Category Image 3"
                loading="lazy"
                className="category_img3"
              />
            </div>

            <div className="category_text">
              <p className="category_p">New Arrival</p>
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </NavLink>

        <NavLink to="/accessories">
          <div className="category_4">
            <div className="category_img4">
              <img
                src="/Utilis/Category4.webp"
                alt="Category Image 4"
                loading="lazy"
                className="category_img4"
              />
            </div>

            <div className="category_text">
              <p className="category_p">Accesories</p>
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </NavLink>
      </div>

      <img
        src="/Utilis/Summer_Walk.webp"
        alt="HomePage Image 2"
        className="home_page_img2"
        loading="lazy"
      />

      {/* Collection */}

      <div className="collection">
        <div className="collection_img1">
          <img
            src="/Utilis/Collection1.webp"
            alt="Collection Image 1"
            loading="lazy"
          />
        </div>
        <div className="collection_img2">
          <img
            src="/Utilis/Collection2.webp"
            alt="Collection Image 2"
            loading="lazy"
          />
        </div>
      </div>

      {/* Trending */}

      <div className="trending">
        <div className="trending_div1">
          <h5>Trending Now</h5>
          <div className="trending_category">
            <h6 className="shoes">Shoes</h6>
            <h6 className="shirts">Shirts</h6>
            <h6 className="acessories">Acessories</h6>
          </div>
        </div>

        <div className="trending_div2">
          <img
            src="/Utilis/Scroll_Image1.jpg"
            alt="Trending Image 1"
            className="trending_img1"
            loading="lazy"
          />
          <img
            src="/Utilis/Scroll_Image2.jpg"
            alt="Trending Image 2"
            className="trending_img2"
            loading="lazy"
          />
          <img
            loading="lazy"
            src="/Utilis/Scroll_Image3.jpg"
            alt="Trending Image 3"
            className="trending_img3"
          />
          <img
            loading="lazy"
            src="/Utilis/Scroll_Image4.jpg"
            alt="Trending Image 4"
            className="trending_img4"
          />
          <img
            loading="lazy"
            src="/Utilis/Scroll_Image5.jpg"
            alt="Trending Image 5"
            className="trending_img5"
          />
          <img
            loading="lazy"
            src="/Utilis/Scroll_Image6.jpg"
            alt="Trending Image 6"
            className="trending_img6"
          />
        </div>
        <div className="trending_arrow">
          <hr className="hr_25" />
          <hr className="hr_67" />
          <i className="bi bi-chevron-left"></i>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>

      {/* Scroll Images */}

      <div className="scroll">
        <div className="scroll_track">
          {[...scrollImages, ...scrollImages].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Scroll ${index + 1}`}
              className="scroll_img"
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <div className="video_container" onClick={togglePlay}>
        <video
          ref={videoRef}
          src="/Utilis/795cffa3c24f44c78e580a67427a917f.SD-480p-1.0Mbps-80004966.mp4"
          muted
          loop
          playsInline
          className="video"
        />

        {/* Center Play Button */}
        {!isPlaying && <div className="play_btn">▶</div>}
      </div>

      {/* Last Banner */}

      <img
        src="/Utilis/Down_Banner.jpg"
        alt="Last Banner"
        className="last_banner"
        loading="lazy"
      />

      {/* Phone Down Navbar */}

      <div className="down_navbar">
        <div className="home">
          <i className="bi bi-house-door"></i>
          <p>home</p>
        </div>
        <div className="cart">
          <i className="bi bi-bag"></i>
          <p>cart</p>
        </div>
        <div className="find">
          <i className="bi bi-geo-alt"></i>
          <p>find a store</p>
        </div>
      </div>
    </div>
  );
};
