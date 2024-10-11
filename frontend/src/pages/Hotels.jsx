import React, { useState } from 'react';
import './HotelBookings.css';

const Hotels = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'Single',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the booking form submission
    console.log('Booking Data:', formData);
  };

  return (
    <div className="hotel-booking-container">
      <form onSubmit={handleSubmit} className="hotel-booking-form">
        <h2>Book Your Stay</h2>
        <div className="input-field">
          <label htmlFor="checkIn">Check-In Date</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="checkOut">Check-Out Date</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="roomType">Room Type</label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </div>

        <button type="submit" className="hotel-booking-btn">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Hotels;