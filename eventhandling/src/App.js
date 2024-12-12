import React, { useState } from 'react';

function RealTimeForm() {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes and update the formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Real-time Form</h1>
      
      {/* Form */}
      <form>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label>Message:</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </div>
      </form>

      {/* Display updated values in real-time */}
      <div>
        <h2>Form Values:</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </div>
    </div>
  );
}

export default RealTimeForm;
