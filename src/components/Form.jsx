import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    let hasErrors = false;

    // Check for empty fields
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = 'This field is required';
        hasErrors = true;
      }
    }

    setFormErrors(errors);

    if (!hasErrors) {
      // Form submission logic goes here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <span className="error">{formErrors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}
      </div>
      <div>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
        {formErrors.company && (
          <span className="error">{formErrors.company}</span>
        )}
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        {formErrors.country && (
          <span className="error">{formErrors.country}</span>
        )}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {formErrors.message && (
          <span className="error">{formErrors.message}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );

};

export default Form;
