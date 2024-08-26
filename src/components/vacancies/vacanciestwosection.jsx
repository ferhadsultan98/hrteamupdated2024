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
    }, 3000); // Bildirim 3 saniye sürecek
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
          <h2>Öne Çıkan İş İlanları</h2>
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
                        <p><strong>Şirket:</strong> {job.company}</p>
                        <p><strong>Maaş:</strong> {job.salary}</p>
                      </div>
                    </div>
                    {applyingJobId === job.id && (
                      <div className="notification-box">
                        <p>Başvurunuz alındı!</p>
                      </div>
                    )}
                    <a 
                      href="#" 
                      className="apply-button"
                      onClick={(e) => handleApply(e, job.id)}
                    >
                      Başvur
                    </a>
                    <a 
                      href="#" 
                      className="details-button" 
                      onClick={(e) => handleDetails(e, job.id)}
                    >
                      Detayları Gör
                    </a>
                  </div>
                  {selectedJobId === job.id && (
                    <div className="job-details">
                      <div className="details-content">
                        <h4>İş İlanı Detayları</h4>
                        <p><strong>Lokasyon:</strong> {job.location}</p>
                        <p><strong>Tecrübe:</strong> {job.experience}</p>
                        <p className="job-date"><strong>İlan Tarihi:</strong> {job.postedDate}</p>
                        <p className="job-date"><strong>Bitiş Tarihi:</strong> {job.expiryDate}</p>
                        <p><strong>Talepler:</strong> {job.requirements}</p>
                        <p><strong>Dil Bilgisi:</strong> {job.languages}</p>
                        <p><strong>İletişim:</strong> {job.contact}</p>
                        <p><strong>Çalışma Saatleri:</strong> {job.workHours}</p>
                        <p><strong>Çalışma Günleri:</strong> {job.days}</p>
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
