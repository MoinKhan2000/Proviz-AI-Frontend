import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import ChangePasswordImg from '../../assets/chagepassword.png';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../../store/userContext';

const ChangePassword = () => {
  const { user, getUser, changePassword } = useUser();
  const [formData, setFormData] = useState({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    // Fetch user data when component mounts
    getUser();
  }, [getUser]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field) => {
    switch (field) {
      case 'oldPassword':
        setShowOldPassword(!showOldPassword);
        break;
      case 'newPassword':
        setShowNewPassword(!showNewPassword);
        break;
      case 'confirmNewPassword':
        setShowConfirmNewPassword(!showConfirmNewPassword);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { newPassword, confirmNewPassword } = formData;
    if (newPassword !== confirmNewPassword) {
      toast.error("New passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const data = await changePassword(formData);
      console.log(formData);

      if (data.success) {
        toast.success('Password changed successfully!');
        setFormData({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex relative w-full m-auto flex-row flex-wrap md:gap-20 justify-center items-center md:items-center h-screen ' id='change'>
      <motion.div className='flex justify-center items-center' whileInView={{ x: [100, 0], opacity: [0, 0, 1], duration: 2 }}>
        <form onSubmit={handleSubmit} className="bg-white w-2/3 md:w-full px-4 py-4 md:px-6 md:py-8 shadow-2xl rounded-sm text-black flex flex-col">
          <h1 className=" text-center text-2xl font-bold leading-9 text-gray-800 p-4">Change Your Password</h1>
          {/* Old Password Input */}
          <div className='bg-blue-50 flex items-center text-sm justify-center md:mb-4 w-full '>
            <input
              type={showOldPassword ? 'text' : 'password'}
              onChange={onChange}
              value={formData.oldPassword}
              className="block bg-blue-50 rounded-sm relative w-full p-1 md:p-3 outline-none font-mono "
              name="oldPassword"
              placeholder="Old Password"
            />
            <button type="button" className='relative -translate-x-3 bg-blue-50 ' onClick={() => togglePasswordVisibility('oldPassword')}>
              {!showOldPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* New Password Input */}
          <div className='bg-blue-50 flex items-center text-sm justify-center my-4 w-full '>
            <input
              type={showNewPassword ? 'text' : 'password'}
              onChange={onChange}
              value={formData.newPassword}
              className="block bg-blue-50 rounded-sm relative w-full p-1 md:p-3 outline-none font-mono "
              name="newPassword"
              placeholder="New Password"
            />
            <button type="button" className='relative -translate-x-3 bg-blue-50 ' onClick={() => togglePasswordVisibility('newPassword')}>
              {!showNewPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Confirm New Password Input */}
          <div className='bg-blue-50 flex items-center text-sm justify-center mb-4 w-full '>
            <input
              type={showConfirmNewPassword ? 'text' : 'password'}
              onChange={onChange}
              value={formData.confirmNewPassword}
              className="block bg-blue-50 rounded-sm relative w-full p-1 md:p-3 outline-none font-mono "
              name="confirmNewPassword"
              placeholder="Confirm New Password"
            />
            <button type="button" className='relative -translate-x-3 bg-blue-50 ' onClick={() => togglePasswordVisibility('confirmNewPassword')}>
              {!showConfirmNewPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="items-center justify-center gap-2 block rounded-xsm md:white w-full hover:scale-105 duration-200 p-0 md:p-1 outline-none font-mono md:mb-4 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none md:my-1"
            disabled={loading}
          >
            {loading ? "Processing..." : "Change Password"}
          </button>
        </form>
      </motion.div>
    </div >
  );
}

export default ChangePassword;
