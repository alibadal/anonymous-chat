import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [preferredGender, setPreferredGender] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the data to the backend or save it temporarily
    navigate("/chat");
  };

  return (
    <div>
      <h1>Welcome to Anonymous Chat</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select
          value={preferredGender}
          onChange={(e) => setPreferredGender(e.target.value)}
          required
        >
          <option value="">Preferred Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="any">Any</option>
        </select>
        <input
          type="text"
          placeholder="Preferred Age Range (e.g., 18-25)"
          value={ageRange}
          onChange={(e) => setAgeRange(e.target.value)}
          required
        />
        <button type="submit">Start Chat</button>
      </form>
    </div>
  );
};

export default HomePage;
