import React from 'react';
import './AdminPanelLayout.css'; // CSS dosyasını içe aktar
import AdminPanelHeader from '../common/AdminPanelHeader/AdminPanelHeader';
import AdminPanelSidebar from '../common/AdminPanelSidebar/AdminPanelSidebar';

const AdminPanelLayout = ({ children }) => {
    return (
        <div className="admin-panel-container">
          <div className="admin-panel-header">
            <AdminPanelHeader/>
          </div>
          <div className="admin-panel-content">
            <div className="admin-panel-sidebar">
              <AdminPanelSidebar/>
            </div>
            <div className="admin-panel-main">
              {children}
            </div>
          </div>
        </div>
    );
};

export default AdminPanelLayout;
