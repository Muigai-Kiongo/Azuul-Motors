import React, { useState } from "react";
import Motors from "./motors/data/motors";

const Search = ({ setFilteredCars }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter cars based on the search term and selected filter
    const filtered = Motors.filter((car) => {
      const matchesSearchTerm =
        car.name.toLowerCase().includes(term) ||
        car.shortDescription.toLowerCase().includes(term);

      const matchesFilter =
        filter === "All" ||
        (filter === "kenyanAvailable" && car.price < "$100,000") || // Example condition for Kenyan availability
        (filter === "Imports" && car.price >= "$100,000"); // Example condition for imports

      return matchesSearchTerm && matchesFilter;
    });

    setFilteredCars(filtered); // Update the filtered cars in the parent component
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    handleSearch({ target: { value: searchTerm } });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for cars...(Mazda, SUV, Luxury....)"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <select
        value={filter}
        onChange={handleFilterChange}
        className="filter-select"
      >
        <option value="All">All</option>
        <option value="kenyanAvailable">Available in Kenya</option>
        <option value="Imports">Direct Import/International Stock</option>
      </select>
    </div>
  );
};

export default Search;
