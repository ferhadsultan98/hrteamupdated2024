import React, { useState } from 'react';
import './vacancies.css'; 
import { jobsData } from './vacanciesjobs.js';
import { FaLaptopCode, FaChartLine, FaUsers, FaDesktop, FaCalculator } from 'react-icons/fa';

const iconMapping = {
  "fa-laptop-code": <FaLaptopCode />,
  "fa-chart-line": <FaChartLine />,
  "fa-users": <FaUsers />,
  "fa-desktop": <FaDesktop />,
  "fa-calculator": <FaCalculator />
};

let VacanciesTwoSection = () => {
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [applyingJobId, setApplyingJobId] = useState(null);

  const handleApply = (event, jobId) => {
    event.preventDefault();
    setApplyingJobId(jobId);
    setTimeout(() => {
      setApplyingJobId(null);
    }, 3000); 
  };

  const handleDetails = (event, jobId) => {
    event.preventDefault();
    setSelectedJobId(prevId => (prevId === jobId ? null : jobId));
  };

  const handleBack = (event) => {
    event.preventDefault();
    setSelectedJobId(null);
  };

  return (
    <div className="VacApp">
      <section id="jobs" className="jobs">
        <div className="container">
          <h2>Seçim İş İlanları</h2>
          <div className="job-list" id="job-list">
            {jobsData.jobs.map(job => (
              <div className={`job ${applyingJobId === job.id ? 'applying' : ''}`} key={job.id}>
                <div className={`job-card ${selectedJobId === job.id ? 'flipped' : ''}`}>
                  <div className="job-content">
                    <div className="job-description">
                      <div>
                        <h3>
                          <i className="job-icon">{iconMapping[job.icon]}</i>
                          {job.title}
                        </h3>
                        <p>{job.description}</p>
                        <p><strong>Şirkət:</strong> {job.company}</p>
                        <p><strong>Maaş:</strong> {job.salary}</p>
                      </div>
                    </div>
                    {applyingJobId === job.id && (
                      <div className="notification-box">
                        <p>Müraciətiniz qəbul edildi!</p>
                      </div>
                    )}
                    <span>
                    <a 
                      href="#" 
                      className="apply-button"
                      onClick={(e) => handleApply(e, job.id)}
                    >
                      Müraciət Et
                    </a>
                    </span>
                    <span>
                    <a 
                      href="#" 
                      className="details-button" 
                      onClick={(e) => handleDetails(e, job.id)}
                    >
                      Təfərrüatları Gör
                    </a>
                    </span>
                  </div>
                  {selectedJobId === job.id && (
                    <div className="job-details">
                      <div className="details-content">
                        <h4>İş İlanı Təfərrüatları</h4>
                        <p><strong>Yerləşmə:</strong> {job.location}</p>
                        <p><strong>Təcrübə:</strong> {job.experience}</p>
                        <p className="job-date"><strong>İlkin Tarix:</strong> {job.postedDate}</p>
                        <p className="job-date"><strong>Bitmə Tarixi:</strong> {job.expiryDate}</p>
                        <p><strong>Tələblər:</strong> {job.requirements}</p>
                        <p><strong>Dil Bilgisi:</strong> {job.languages}</p>
                        <p><strong>Əlaqə:</strong> {job.contact}</p>
                        <p><strong>İş Saatları:</strong> {job.workHours}</p>
                        <p><strong>İş Günləri:</strong> {job.days}</p>
                      </div>
                      <button className="back-button" onClick={handleBack}>
                        Geri Dön
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VacanciesTwoSection;
