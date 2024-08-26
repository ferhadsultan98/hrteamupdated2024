// src/components/SubscriptionAlert.js
import React, { useState, useEffect } from 'react';
import './ModalAlert.css'; 

const SubscriptionAlert = () => {
    const [showAlert, setShowAlert] = useState(true);
    const [showNotification, setShowNotification] = useState(false);
  
    const handleSubscribe = () => {
      setShowAlert(false);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000); // 3 saniye sonra bildirim kapanacak
    };
  
    useEffect(() => {
      // Abone ol uyarısını sayfa yüklendikten 1 saniye sonra göster
      const timer = setTimeout(() => {
        setShowAlert(true);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className="ModalAlert">
        {showAlert && (
          <div className="alert">
            <p>Abone olun ve içeriklerimizi kaçırmayın!</p>
            <button onClick={handleSubscribe}>Abone Ol</button>
          </div>
        )}
  
        {showNotification && (
          <div className="notification">
            <p>Teşekkürler! Abone oldunuz.</p>
          </div>
        )}
      </div>
    );
  };

export default SubscriptionAlert;
