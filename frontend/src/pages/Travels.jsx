import React, { useState } from 'react';
import './Travels.css'; // Assuming you have a CSS file for styling

const Travels = () => {
  
  const [selectedMode, setSelectedMode] = useState('flight');
  const [details, setDetails] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1,
  });

  const handleModeChange = (event) => {
    setSelectedMode(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., make API request)
    console.log('Booking details:', details, 'Transport mode:', selectedMode);
    // For demonstration, we'll just log the details
  };

  return (
    <div className="travels-container">
      <h1>Filter Your Mode of Transport</h1>
      <form onSubmit={handleSubmit} className="travels-form">
        <div className="form-group">
          <label htmlFor="mode">Select Mode of Transport:</label>
          <select
            id="mode"
            value={selectedMode}
            onChange={handleModeChange}
            className="form-control"
          >
            <option value="flight">Flight</option>
            <option value="train">Train</option>
            <option value="bus">Bus</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            name="from"
            value={details.from}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Departure City"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            name="to"
            value={details.to}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Destination City"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={details.date}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="passengers">Passengers:</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={details.passengers}
            onChange={handleInputChange}
            className="form-control"
            min="1"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Travels;
