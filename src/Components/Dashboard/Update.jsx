import React, { useEffect, useState } from 'react';
import { useUser } from '../../store/userContext';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
  const { user, getUser, updateUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    name: user ? user.name : "",
    email: user ? user.email : "",
    role: user ? user.role : "user",
    profileImage: user ? user.profileImage : null,
  });

  useEffect(() => {
    getUser()
  }, [getUser]);

  const onChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setCredentials({ ...credentials, [name]: files[0] });
    } else {
      setCredentials({ ...credentials, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    const formData = new FormData();
    console.log(credentials);

    formData.append('name', credentials.name);
    formData.append('email', credentials.email);
    formData.append('role', credentials.role);

    if (credentials.profileImage) {
      formData.append('profileImage', credentials.profileImage);
    }

    const response = await updateUser(formData);
    console.log(response);

    if (response.success) {
      toast.success(`${response.message}`);
    } else {
      toast.error(`${response.message}`);
    }

    setLoading(false); // Stop loading
  };

  return (
    <motion.div className='flex relative w-[80%] m-auto flex-row flex-wrap gap-5 md:gap-20 justify-center items-center h-screen ' id='update'>
      <motion.div
        className="md:w-[40%] w-[100%]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="bg-white px-4 md:px-12 py-4 md:py-8 shadow-2xl rounded-xl md:text-black">
          <h1 className="text-center text-xsm md:text-2xl font-bold leading-5 md:leading-8 text-gray-800 p-1 md:p-4">Update Your Account.</h1>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-20 md:h-32 w-auto mb-4 rounded-full hover:scale-125 duration-200 cursor-pointer object-cover shadow-2xl border-none border-slate-500"
              src={user.profileImage || "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"}
              alt="Profile"
            />
          </div>

          <div className='w-full overflow-hidden flex items-center justify-start space-x-2 mb-4'>
            <span className='block bg-pink-50 w-fit md:w-full whitespace-nowrap text-[12px] md:text-sm rounded-xsm p-1 md:p-3'>
              Your Name:
            </span>
            <motion.input
              type="text"
              className="block bg-blue-50 w-fit text-[12px] md:text-sm rounded-xsm p-1 md:p-3 outline-none font-mono"
              name="name"
              minLength={2}
              placeholder="User Name"
              value={credentials.name}
              onChange={onChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div className='w-full flex overflow-hidden items-center justify-start space-x-2 mb-4'>
            <span className='block bg-pink-50 w-fit md:w-full whitespace-nowrap [50%] text-[12px] md:text-sm rounded-xsm p-1 md:p-3'>
              Your Email:
            </span>
            <motion.input
              type="email"
              className="block bg-blue-50 w-fit text-[12px] md:text-sm rounded-xsm p-1 md:p-3 outline-none font-mono"
              name="email"
              placeholder="Your Email"
              value={credentials.email}
              onChange={onChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <button
            type="submit"
            className="items-center justify-center gap-2 block rounded-xsm w-full hover:scale-105 duration-200 p-0 md:p-3 outline-none font-mono bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                <span className="ml-2">Updating...</span>
              </div>
            ) : (
              'Update Account'
            )}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Update;
