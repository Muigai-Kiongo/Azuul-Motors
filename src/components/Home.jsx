import React, { useState, useEffect } from "react";
import CarList from "./motors/MotorsContainer";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const subtexts = [
    "Experience the luxury of Azuul Motors.",
    "Power and efficiency in every ride.",
    "Your safety is our top priority.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % subtexts.length);
        setFade(false); // Start fade in
      }, 500); // Duration of fade out
    }, 10000); // Switch every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <section id="home" className="hero" tabIndex="0">
        <div className="hero-container">
          <h1 className="hero-title">Drive with Pride</h1>
          <p className={`hero-subtitle ${fade ? "fade-out" : "fade-in"}`}>
            {subtexts[currentIndex]}
          </p>
        </div>
      </section>
      <section id="carListing" className="carListing">
        <CarList />
      </section>
    </>
  );
};

export default Home;
