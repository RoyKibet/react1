import React, { useState } from "react";

function UserInfoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Handlers for input changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    const input = event.target.value;

    // Optional: Basic validation to allow only numbers
    if (/^\d*$/.test(input) || input === "") {
      setPhoneNumber(input);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    console.log("Submitted:", { name, email, phoneNumber });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          required
          disabled={!isEditing} // Disable input if not editing
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
          disabled={!isEditing} // Disable input if not editing
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder="Enter your phone number"
          disabled={!isEditing} // Disable input if not editing
        />
      </div>
      <button type="submit" disabled={!isEditing}>Submit</button>
      <button type="button" onClick={handleEdit} disabled={isEditing}>
        Edit
      </button>
    </form>
  );
}

export default UserInfoForm;

