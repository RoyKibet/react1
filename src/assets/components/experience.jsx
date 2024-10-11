import React, { useState } from "react";

function Experience() {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Handlers for input changes
  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleResponsibilitiesChange = (event) => {
    setResponsibilities(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    console.log("Submitted:", { company,title,responsibilities });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={company}
          onChange={handleCompanyChange}
          placeholder="Enter company name"
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
          placeholder="Enter position title"
          required
          disabled={!isEditing} // Disable input if not editing
        />
      </div>
      <div>
        <label htmlFor="responsibilities">Responsibility:</label>
        <input
          type="text"
          id="responsibilities"
          name="responsibilities"
          value={responsibilities}
          onChange={handleResponsibilitiesChange}
          placeholder="Enter main responsibilities"
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

export default Experience;
