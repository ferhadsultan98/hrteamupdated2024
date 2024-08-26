import React, { useEffect, useState } from 'react';
import './Fivesection.css';

const Fivesection = () => {
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
          <p>Müşteri Sayısı</p>
        </div>
        <div className="stat-info">
          <p>Detaylı Bilgi: Müşterilerimizin memnuniyeti her geçen gün artıyor!</p>
        </div>
      </div>
      <div className="stat">
        <div className="stat-content">
          <div className="stat-number">
            {counters.stat2}+
          </div>
          <p>Proje Tamamlandı</p>
        </div>
        <div className="stat-info">
          <p>Detaylı Bilgi: Tamamlanan projelerimizin başarı oranı yüksek.</p>
        </div>
      </div>
      <div className="stat">
        <div className="stat-content">
          <div className="stat-number">
            {counters.stat3}+
          </div>
          <p>Ödüller</p>
        </div>
        <div className="stat-info">
          <p>Detaylı Bilgi: Kazandığımız ödüller ile sektördeki başarımızı gösteriyoruz.</p>
        </div>
      </div>
    </div>
  );
};

export default Fivesection;
