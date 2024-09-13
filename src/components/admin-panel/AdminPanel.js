import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './AdminPanel.css';
import AdminPanelLayout from './adminpanel-layout/AdminPanelLayout.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import LoginPage from './login-page/LoginPage.jsx';


const AdminPanel = () => {
    return (
        <BrowserRouter>
            <AdminPanelLayout>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </AdminPanelLayout>
        </BrowserRouter>
    );
};

export default AdminPanel;
