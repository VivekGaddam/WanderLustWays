import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    interests: [],
    idProof: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (name === 'interests') {
      const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
      setFormData({ ...formData, interests: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // You can process form data here

    // Redirect to login page after successful signup
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label htmlFor="name">Name:</label>
        <input
          placeholder='Enter your name'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="username">Phone No.</label>
        <input
          placeholder='Enter Phone no.'
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Enter OTP:</label>
        <input
          placeholder='Enter OTP'
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email ID:</label>
        <input
        placeholder='Enter Email ID'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="interests">Interests:</label>
        {/* <select
          id="interests"
          name="interests"
          multiple
          value={formData.interests}
          onChange={handleChange}
        >
          <option value="heritage">Heritage</option>
          <option value="temple">Temple</option>
          <option value="tomb">Tomb</option>
          <option value="memorial">Memorial</option>
          <option value="theme-park">Theme Park</option>
          <option value="museum">Museum</option>
          <option value="amusement-park">Amusement Park</option>
          <option value="botanical-garden">Botanical Garden</option>
          <option value="palace">Palace</option>
          <option value="fort">Fort</option>
          <option value="beach">Beach</option>
          <option value="mountain">Mountain</option>
        </select> */}
        <input
          id="interests"
          name="interests"
          placeholder='Enter your interests'
          value={formData.interests}
          onChange={handleChange}/>


        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;


