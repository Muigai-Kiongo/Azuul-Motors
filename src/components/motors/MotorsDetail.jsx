import { useParams } from "react-router-dom";
import Motors from "./data/motors";

const CarDetail = () => {
  const { id } = useParams();
  const car = Motors.find((car) => car.id === parseInt(id));

  if (!car) {
    return <h2>Car not found</h2>;
  }

  return (
    <div className="car-detail">
      <h2>{car.name}</h2>
      <div className="car-images">
        {car.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${car.name} ${index + 1}`}
            className="car-detail-image"
          />
        ))}
      </div>
      <p className="car-detail-price">{car.price}</p>
      <p className="car-detail-description">{car.shortDescription}</p>
      <h3>Specifications</h3>
      <ul className="car-specs">
        <li>
          <strong>Engine:</strong> {car.specs.engine}
        </li>
        <li>
          <strong>Horsepower:</strong> {car.specs.horsepower}
        </li>
        <li>
          <strong>Fuel Efficiency:</strong> {car.specs.fuelEfficiency}
        </li>
        <li>
          <strong>Transmission:</strong> {car.specs.transmission}
        </li>
      </ul>
    </div>
  );
};

export default CarDetail;
