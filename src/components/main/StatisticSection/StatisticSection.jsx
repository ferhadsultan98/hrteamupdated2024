import React, { useEffect, useState } from 'react';
import './StatisticSection.css';

const StatisticSection = () => {
  const [counters, setCounters] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0
  });

  useEffect(() => {
    const targetValues = {
      stat1: 163,
      stat2: 85,
      stat3: 43
    };

    const updateCounter = (elementId, endValue) => {
      let count = 0;
      const increment = endValue / 200;
      const interval = setInterval(() => {
        count += increment;
        setCounters(prevCounters => ({
          ...prevCounters,
          [elementId]: Math.floor(count)
        }));
        if (count >= endValue) {
          clearInterval(interval);
          setCounters(prevCounters => ({
            ...prevCounters,
            [elementId]: endValue
          }));
        }
      }, 10);
    };

    Object.entries(targetValues).forEach(([elementId, endValue]) => {
      updateCounter(elementId, endValue);
    });

  }, []);

  return (
    <div className="statistics">
      <div className="stat">
        <div className="stat-content">
          <div className="stat-number">
            {counters.stat1}+
          </div>
          <p>Müştərilərin Sayı</p>
        </div>
        <div className="stat-info">
        <p>Ətraflı Məlumat: Müştərilərimizin məmnuniyyəti günü-gündən artır!</p>
        </div>
      </div>
      <div className="stat">
        <div className="stat-content">
          <div className="stat-number">
            {counters.stat2}+
          </div>
          <p>Layihə Tamamlandı</p>
        </div>
        <div className="stat-info">
        <p>Ətraflı məlumat: Tamamlanmış layihələrimiz yüksək müvəffəqiyyət dərəcəsinə malikdir.</p>
        </div>
      </div>
      <div className="stat">
        <div className="stat-content">
          <div className="stat-number">
            {counters.stat3}+
          </div>
          <p>Mükafatlar</p>
        </div>
        <div className="stat-info">
        <p>Ətraflı məlumat: Sektordakı uğurlarımızı qazandığımız mükafatlarla göstəririk.</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticSection;
