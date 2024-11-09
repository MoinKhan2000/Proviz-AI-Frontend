import React from 'react';
import { useUser } from '../../store/userContext';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user } = useUser();

  return user ? (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen dark:bg-slate-800 flex items-center justify-center p-4 md:p-6 w-full"
    >
      {/* Profile Card */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800/70 backdrop-filter backdrop-blur-md shadow-xl overflow-hidden hover:shadow-2xl group rounded-2xl p-5 md:p-6 transition-all duration-500 w-60 md:w-4/12 text-center"
      >
        {/* Profile Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center flex-col text-center gap-4"
        >
          <img
            src={user.profileImage || 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png'}
            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-cover rounded-full  border-gray-600 transition-all duration-500"
            alt={`${user.name}'s profile`}
          />
          <div>
            <h1 className="text-sm md:text-lg font-bold text-gray-700 dark:text-white transition-all duration-500">
              {user.name}
            </h1>
            <p className="dark:text-gray-300 text-blue-500 capitalize text-sm md:text-lg">Role: {user.role}</p>
          </div>
        </motion.div>

        {/* User Details Section */}
        <div className="mt-2 md:mt-4 grid grid-cols-1 gap-2 md:gap-4 text-sm text-gray-600 dark:text-gray-300">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/30 dark:bg-gray-600/30 p-1 md:p-2 rounded-lg shadow-sm text-xs md:text-lg"
          >
            <span className="font-medium text-xs md:text-lg">ID:</span>
            <span className="break-words text-xs md:text-lg">{user._id}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white/30 dark:bg-gray-600/30 p-1 md:p-2 rounded-lg shadow-sm text-xs md:text-lg"
          >
            <span className="font-medium text-xs md:text-lg">Email:</span>
            <span className="truncate text-xs md:text-lg">{user.email}</span>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600/80 dark:bg-gray-200/80 right-1 rounded-lg p-1"
        >
          <div className="flex justify-evenly items-center gap-2 text-xl text-white dark:text-gray-600">
            {/* Twitter Icon */}
            <a href="#" className="hover:text-blue-400 transition-all duration-300">
              <svg viewBox="0 0 1024 1024" fill="currentColor" height="1.5em" width="1.5em">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
              </svg>
            </a>
            {/* Facebook Icon */}
            <a href="#" className="hover:text-blue-600 transition-all duration-300">
              <svg fill="currentColor" viewBox="0 0 16 16" height="1.5em" width="1.5em">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a href="#" className="hover:text-blue-700 transition-all duration-300">
              <svg viewBox="0 0 960 1000" fill="currentColor" height="1.5em" width="1.5em">
                <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <p className="text-lg text-gray-700 dark:text-gray-300">Loading user data...</p>
    </div>
  );
};

export default Profile;
