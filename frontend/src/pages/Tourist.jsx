import React, { useState } from 'react';
import './TouristDestinations.css'; // Assuming you have a CSS file for styling

// Mock function to simulate fetching packages based on the destination
const fetchPackages = (destination) => {
  // In a real application, replace this with an API call
  // Here, we're using static data for demonstration
  const packages = {
    Paris: [
      { id: 1, name: 'Paris Sightseeing Tour', price: '$200' },
      { id: 2, name: 'Eiffel Tower Experience', price: '$150' },
    ],
    Tokyo: [
      { id: 3, name: 'Tokyo City Tour', price: '$250' },
      { id: 4, name: 'Mount Fuji Trip', price: '$300' },
    ],
    // Add more destinations and packages as needed
  };

  return packages[destination] || [];
};

const Tourist = () => {
  const [destination, setDestination] = useState('');
  const [packages, setPackages] = useState([]);

  const handleInputChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const fetchedPackages = fetchPackages(destination);
    setPackages(fetchedPackages);
  };

  return (
    <div className="tourist-destinations-container">
      <h1>Find Tourist Packages</h1>
      <form onSubmit={handleSearch} className="search-form">
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter destination"
            required
          />
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {packages.length > 0 && (
        <div className="packages-list">
          <h2>Available Packages</h2>
          <ul>
            {packages.map(pkg => (
              <li key={pkg.id} className="package-item">
                <span className="package-name">{pkg.name}</span>
                <span className="package-price">{pkg.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tourist;
