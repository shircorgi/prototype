import { useState, useEffect } from "react";
import "../css/MainSlide.css";
import banner1 from "../components/img/banner1.jpg";
import banner2 from "../components/img/banner2.jpg";
import banner3 from "../components/img/banner3.jpg";

const MainSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="MainSlide">
      <div className="MainSlide-header">
        <div className="MainSlide-button">
          <button className="MainSlide-left" onClick={handlePrev}></button>
          <button className="MainSlide-right" onClick={handleNext}></button>
        </div>
        <div
          className="MainSlide-banners"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="MainSlide-banner">
            <a href="#!">
              <img src={banner1} alt="Banner 1" />
            </a>
          </div>
          <div className="MainSlide-banner">
            <a href="#!">
              <img src={banner2} alt="Banner 2" />
            </a>
          </div>
          <div className="MainSlide-banner">
            <a href="#!">
              <img src={banner3} alt="Banner 3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlide;
