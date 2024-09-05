import React from 'react';
import './ApplyForm.css';

const ApplyForm = () => {
  return (
    <div className="job-application">
      <h2>İş Müraciəti Edin</h2>
      <form id="application-form">
        <label htmlFor="name">Adınız:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-poçt:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="resume">CV (Özgeçmiş):</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf, .doc, .docx"
          required
        />

        <button type="submit">Müraciəti Göndər</button>
      </form>
    </div>
  );
};

export default ApplyForm;
