import React, { useEffect } from 'react';
import { useUser } from '../../store/userContext';
import Sidebar from '../Sidebar/Sidebar';
import { Route, Routes, useNavigate } from 'react-router';
import Profile from './Profile';
import Update from './Update';
import ChangePassword from './ChangePassword';
import Applications from '../Applications/Applications';

const Dashboard = () => {

  const { user, setToken, token, setUser, getUser } = useUser();
  const navigate = useNavigate()

  const getLoggedInUser = async () => {
    const data = await getUser();
    console.log(data);
  }

  useEffect(() => {
    getUser()
  }, [token, setToken]);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  })

  return user ? (
    <div className="h-screen absolute top-0 font-bold max-w-[1500px] m-auto bg-gradient-to-br from-blue-500 via-purple-500 to-transparent  w-[100%] flex">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route exact path="/updatedetails" element={<Update />} />
        <Route exact path="/changepassword" element={<ChangePassword />} />
        <Route exact path="/applications" element={<Applications />} />
      </Routes>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Loading user data...</p>
    </div>
  );
};

export default Dashboard;
