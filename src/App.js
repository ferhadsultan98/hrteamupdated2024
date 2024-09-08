import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/layout/layout';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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
import Loader from './components/loader/loader'; 
import Chat from './components/chat/Chat';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/az" />} />

              {/* Dil kodları ile yönlendirmeler */}
              <Route path="/:lang" element={<Main />} />
              <Route path="/:lang/about" element={<About />} />
              <Route path="/:lang/services" element={<Services />} />
              <Route path="/:lang/vacancies" element={<Vacancies />} />
              <Route path="/:lang/contact" element={<Contact />} />
              <Route path="/:lang/services/oneservice" element={<OneService />} />
              <Route path="/:lang/services/twoservice" element={<TwoService />} />
              <Route path="/:lang/services/threeservice" element={<ThreeService />} />
              <Route path="/:lang/services/fourservice" element={<FourService />} />
              <Route path="/:lang/services/fiveservice" element={<FiveService />} />
              <Route path="/:lang/services/sixservice" element={<SixService />} />
              <Route path="/:lang/services/sevenservice" element={<SevenService />} />
              <Route path="/:lang/services/eightservice" element={<EightService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Chat />

          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
