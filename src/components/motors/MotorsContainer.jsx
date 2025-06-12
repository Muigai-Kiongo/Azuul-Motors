import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Motors from "./data/motors";
import Search from "../Search";

const CarList = () => {
  const [filteredCars, setFilteredCars] = useState(Motors); // State for filtered cars

  return (
    <section className="car-list">
      <h2>Lets Find You a Car</h2>
      <Search setFilteredCars={setFilteredCars} />{" "}
      {/* Include Search component */}
      <div className="car-list-container">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <Link to={`/car/${car.id}`} className="car-link">
              {" "}
              {/* Link to Car Detail */}
              <img src={car.images[0]} alt={car.name} className="car-image" />
              <h3 className="car-name">{car.name}</h3>
              <p className="car-price">{car.price}</p>
              <p className="car-description">{car.shortDescription}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarList;
