import React from 'react';
import './ApplyForm.css';

const ApplyForm = () => {
  return (
    <div className="job-application">
      <h2>İş Başvurusu Yapın</h2>
      <form id="application-form">
        <label htmlFor="name">Adınız:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-posta:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="resume">Özgeçmiş:</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf, .doc, .docx"
          required
        />

        <button type="submit">Başvuruyu Gönder</button>
      </form>
    </div>
  );
};

export default ApplyForm;
