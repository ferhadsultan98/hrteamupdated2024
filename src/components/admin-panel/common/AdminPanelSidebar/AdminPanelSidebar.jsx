import React, { useState } from 'react';
import './AdminPanelSidebar.css';

const AdminPanelSidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleClick = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="/admin/dashboard">İnformasya Paneli</a></li>
          <li><a href="/admin/employees">İşçilər</a></li>
          <li><a href="#">Müştərilər</a></li>
          <li><a href="#">Layihələr</a></li>
          <li><a href="#">Hesabatlar</a></li>
          <li><a href="#">Tənzimləmələr</a></li>
          <li className={`dropdown ${activeDropdown === 'chat' ? 'open' : ''}`}>
            <a href="#" onClick={() => handleClick('chat')} className="dropbtn">Chat</a>
            {activeDropdown === 'chat' && (
              <div className="dropdown-content">
                <a href="/chat">Mesajlar</a>
              </div>
            )}
          </li>
          <li className={`dropdown ${activeDropdown === 'email' ? 'open' : ''}`}>
            <a href="#" onClick={() => handleClick('email')} className="dropbtn">Email</a>
            {activeDropdown === 'email' && (
              <div className="dropdown-content">
                <a href="./inbox.html">Gələnlər</a>
                <a href="/compose">Yazmaq</a>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminPanelSidebar;
