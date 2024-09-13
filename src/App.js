import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/layout/layout';
import Main from './components/main/main';
import Services from './components/services/services';
import About from './components/about/about';
import Vacancies from './components/vacancies/vacancies';
import Contact from './components/contact/contact';
import OneService from './components/services/serviceslist/oneservice';
import TwoService from './components/services/serviceslist/twoservice';
import ThreeService from './components/services/serviceslist/threeservice';
import FourService from './components/services/serviceslist/fourservice';
import FiveService from './components/services/serviceslist/fiveservice';
import SixService from './components/services/serviceslist/sixservice';
import SevenService from './components/services/serviceslist/sevenservice';
import EightService from './components/services/serviceslist/eightservice';
import NotFound from './components/notfound404/notfound';
import LoginPage from './components/admin-panel/login-page/LoginPage';
import Dashboard from './components/admin-panel/dashboard/dashboard';
import Chat from './components/chat/Chat';
import Loader from './components/loader/loader';
import AdminPanelLayout from './components/admin-panel/adminpanel-layout/AdminPanelLayout';
import Employees from './components/admin-panel/employees/employees';

const RouterWrapper = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const token = localStorage.getItem('authToken');
  const isAuthenticated = !!token;

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/az" />} />

        {/* Dil kodları ile yönlendirmeler */}
        <Route path="/:lang" element={<Layout><Main /></Layout>} />
        <Route path="/:lang/about" element={<Layout><About /></Layout>} />
        <Route path="/:lang/services" element={<Layout><Services /></Layout>} />
        <Route path="/:lang/vacancies" element={<Layout><Vacancies /></Layout>} />
        <Route path="/:lang/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/:lang/services/oneservice" element={<Layout><OneService /></Layout>} />
        <Route path="/:lang/services/twoservice" element={<Layout><TwoService /></Layout>} />
        <Route path="/:lang/services/threeservice" element={<Layout><ThreeService /></Layout>} />
        <Route path="/:lang/services/fourservice" element={<Layout><FourService /></Layout>} />
        <Route path="/:lang/services/fiveservice" element={<Layout><FiveService /></Layout>} />
        <Route path="/:lang/services/sixservice" element={<Layout><SixService /></Layout>} />
        <Route path="/:lang/services/sevenservice" element={<Layout><SevenService /></Layout>} />
        <Route path="/:lang/services/eightservice" element={<Layout><EightService /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />

        {/* Admin Panel Routes */}
        <Route path="/loginpage" element={isAuthenticated ? <Navigate to="/loginpage" /> : <LoginPage />} />
        <Route path="/admin" element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <LoginPage />} />
        <Route path="/admin/dashboard" element={isAuthenticated ? <AdminPanelLayout><Dashboard /></AdminPanelLayout> : <Navigate to="/admin" />} />
        <Route path="/admin/employees" element={isAuthenticated ? <AdminPanelLayout><Employees /></AdminPanelLayout> : <Navigate to="/admin" />} />
      </Routes>
      {!isAdminRoute && <Chat />}
    </>
  );
};

const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : <RouterWrapper />}
    </BrowserRouter>
  );
};

export default App;
