import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import ApplicationForm from '../ApplicationForm/ApplicationForm';

const Modal = ({ isOpen, onClose, modalType }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-transpanrent bg-opacity-50 w-full flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-transparent flex flex-col rounded-md shadow-lg w-1/3  h-auto relative overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-2xl text-gray-700 hover:text-red-600 transition-all"
            >
              <AiOutlineClose />
            </button>

            {/* Content */}
            <div className="p-2">
              {modalType === 'login' ? (
                <Login isOpen={isOpen} onClose={onClose} />
              ) : modalType === 'signup' ? (
                <SignUp isOpen={isOpen} onClose={onClose} />
              ) : (
                <ApplicationForm isOpen={isOpen} onClose={onClose} />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
