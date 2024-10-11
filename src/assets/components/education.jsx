import React, { useState } from "react";

function Education() {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Handlers for input changes
  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    console.log("Submitted:", { school,title,date });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="school">Name:</label>
        <input
          type="text"
          id="school"
          name="school"
          value={school}
          onChange={handleSchoolChange}
          placeholder="Enter school name"
          required
          disabled={!isEditing} // Disable input if not editing
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="title"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title of study"
          required
          disabled={!isEditing} // Disable input if not editing
        />
      </div>
      <div>
        <label htmlFor="date">Date of Study:</label>
        <input
          type="text"
          id="date"
          name="date"
          value={date}
          onChange={handleDateChange}
          placeholder="Enter date of study"
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

export default Education;

