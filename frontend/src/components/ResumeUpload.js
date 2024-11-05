import React, { useState } from 'react';

function ResumeUpload() {
  const [resume, setResume] = useState(null);

  const handleFileUpload = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('resume', resume);

    fetch('http://localhost:8000/api/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleSubmit}>Upload Resume</button>
    </div>
  );
}

export default ResumeUpload;
