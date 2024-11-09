import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className="loader mb-4"></div>
      <p className='text-2xl font-semibold text-gray-700 transition transform duration-300 hover:scale-110 hover:text-blue-500 hover:rotate-3 hover:skew-x-3'>
        Logging out...
      </p>

      <style jsx>{`
        .loader {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 8px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Logout;
