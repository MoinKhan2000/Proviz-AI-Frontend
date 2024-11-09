import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useApplication } from '../../store/applicationContext';
import '../../../src/App.css';

const ApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { deleteApplicationById, getAllApplication } = useApplication();

  // Fetch applications from API
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await getAllApplication();
        setApplications(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch applications.');
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await deleteApplicationById(id);
      toast.success('Application deleted successfully!');
      setApplications((prev) => prev.filter((app) => app._id !== id));
    } catch (error) {
      console.error('Error deleting application:', error);
      toast.error('Failed to delete the application. Please try again.');
    }
  };

  // Handle Mouse Movement for Background
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="mt-20 w-full text-white py-16 px-6 flex flex-col items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Page Title */}
      <motion.h1
        className="text-2xl md:text-5xl font-bold text-center text-white mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Manage Applications
      </motion.h1>

      {/* Loading Spinner */}
      {loading && (
        <motion.div
          className="flex justify-center items-center h-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-600"></div>
        </motion.div>
      )}

      {/* Applications Table */}
      {!loading && applications.length > 0 ? (
        <motion.div
          className="overflow-x-auto max-w-6xl w-full z-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg p-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <table className="table-auto w-full text-left">
            {/* Table Header */}
            <thead>
              <tr className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-800 text-white font-semibold">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Submitted On</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {applications.map((app, index) => (
                <motion.tr
                  key={app._id}
                  className={`${index % 2 === 0 ? 'bg-gray-900/40' : 'bg-gray-600/40'
                    } hover:bg-white hover:text-black transition-colors duration-200`}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <td className="borde-none px-4 py-2">{index + 1}</td>
                  <td className="borde-none px-4 py-2">{app.name}</td>
                  <td className="borde-none px-4 py-2">{app.email}</td>
                  <td className="borde-none px-4 py-2">{app.phoneNumber}</td>
                  <td className="borde-none px-4 py-2">{app.description}</td>
                  <td className="borde-none px-4 py-2">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>
                  <td className="borde-none px-4 py-2 text-center">
                    <motion.button
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition-transform transform hover:scale-105"
                      onClick={() => handleDelete(app._id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Delete
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ) : (
        !loading && (
          <motion.div
            className="text-center text-sm md:text-xl text-gray-800 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm md:text-xl">No applications found.</p>
          </motion.div>
        )
      )}
    </div>
  );
};

export default ApplicationsPage;
