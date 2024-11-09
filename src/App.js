import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Navbar, Footer, About, } from './Components';
import { UserProvider } from './store/userContext';
import { ToastContainer } from 'react-toastify';
import ScrollingText from './Components/ScrollText/ScrollingText';
import WhyUs from './Components/Why Us/WhyUs';
import MissionAndVision from './Components/MissionAndVision/MissionAndVision';
import Testimonials from './Components/Testimonials/Testimonials';
import Courses from './Components/Courses/Courses';
import Modal from './Components/Modal/Modal';
import { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import { ApplicationProvider } from './store/applicationContext';
import FourOFour from './Components/FourOFour/FourOFour';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  // Functions to open the modal
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <UserProvider>
      <ApplicationProvider>
        <BrowserRouter>
          <Navbar openModal={openModal} />
          <Modal isOpen={isModalOpen} onClose={closeModal} modalType={modalType} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Landing Page Sections */}
                  <div id="home">
                    <Home />
                  </div>
                  <div id="about" className="min-h-screen">
                    <About />
                    <ScrollingText />
                  </div>
                  <div id="courses" className="min-h-screen">
                    <Courses />
                  </div>
                  <div id="whyUs" className="min-h-screen">
                    <WhyUs />
                  </div>
                  <div id="testimonials" className="min-h-screen">
                    <Testimonials />
                  </div>
                  <div id="mission" className="min-h-screen">
                    <MissionAndVision />
                  </div>
                </>
              }
            />
            {/* Adding multiple routes inside the dashboard routes to manage the applications. */}
            <Route path="/dashboard/*" element={
              <div id="dashboard" className="min-h-screen">
                <Dashboard />
              </div>}
            />
            {/* 404 Page Route */}
            <Route path="*" element={<FourOFour />} />
          </Routes>
          <Footer />

          {/* Toast Notifications */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </BrowserRouter>
      </ApplicationProvider>
    </UserProvider>
  );
}
