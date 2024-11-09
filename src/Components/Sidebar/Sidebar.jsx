import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { PiStudentFill, PiUserListFill } from "react-icons/pi";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { SiGooglemessages } from "react-icons/si";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // Create a state object to manage submenu state for each menu item
  const [submenuStates, setSubmenuStates] = useState({});

  const menu = [
    {
      title: "Profile",
      icon: <FaUser />
      , route: ''

    },
    {
      title: 'update details',
      icon: <FaUserEdit />,
      route: 'updatedetails'
    },
    {
      title: "see applications",
      icon: < SiGooglemessages />
      , route: 'applications'
    },
    // {
    //   spacing: true,
    //   title: "logout",
    //   icon: <IoLogOut />
    //   , route: 'logout'
    // }
  ];

  // Handling multiple dropdown using state object
  return (
    <div className={`bg-gradient-to-r z-0 mt-[5.5rem] z-10 md:mt-20 from-blue-950 to-gray-900 relative h-[83%] md:h-[88%] p-2 md:p-5 pt-2 md:pt-4 ${open ? 'w-36 md:w-60' : 'w-10 md:w-20'} z-9 duration-300 relative`}>
      <FaArrowLeft
        className={`bg-white text-dark-purple text-xsm md:text-2xl rounded-full absolute -right-3 top-2 md:top-8 border-dark-purple cursor-pointer ${!open ? 'rotate-180' : 'rotate-270'}`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex ">
        <MdDashboard className={`text-white text-xl md:text-4xl rounded cursor-pointer block float-left md:mr-2 mr-0 transition-all duration-300 ${open && 'rotate-180'}`} />
        <h1 className={`text-white origin-left block font-medium text-sm md:text-2xl duration-300 ${!open && "scale-0"}`}>Dashboard </h1>
      </div>
      <ul className={` ${Object.values(submenuStates).filter(Boolean).length > 0 ? 'mb-[150px]' : ''}`}>

        {menu.map((option, index) => (
          <motion.div
            key={index}
            whileInView={{ duration: 10000, opacity: [0, 1], scale: [0, 1], originX: 0.5 }}
          >
            <Link to={option.route} className={`text-white text-sm flex items-center gap-x-1 md:gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-0 md:mt-2 transition-all duration-300 ${option.spacing ? 'mt-0 md:mt-6' : '-mt-1 md:mt-2'}`}>
              <span className="md:text-2xl block float-left text-sm">
                {option.icon ? (option.icon) : <PiStudentFill />}
              </span>
              <span
                className={`text-xs md:text-lg font-medium flex-1 capitalize whitespace-nowrap duration-300 origin-left ${!open && 'scale-0'} `}>{option.title}
              </span>
            </Link>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
