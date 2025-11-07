import React from 'react';
import ThemeSwitcher from '../day&night/ThemeSwitcher';
import { FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa'; // Font Awesome
import { FiUser, FiCode, FiBookOpen, FiBriefcase, FiFolder, FiMail } from 'react-icons/fi';
import { MdBuild } from 'react-icons/md'; 
import { GiGraduateCap } from 'react-icons/gi'; 

function Sidebar() {
  return (
    <div className="p-5 bg-white w-[6%] flex justify-center flex-col h-[90vh] rounded-xl ">
      <div className="h-1/5">
        <ThemeSwitcher />
      </div>
      <div className="h-2/3 flex flex-col gap-10 text-neutral-600">
        <div className="mx-auto">
          <FiUser size={20}/>
        </div>
        <div className="mx-auto">
          <FiCode size={20}/>
        </div>
        <div className="mx-auto">
          <FiBookOpen size={20}/>
        </div>
        <div className="mx-auto">
          <FiBriefcase size={20}/>
        </div>
        <div className="mx-auto">
          <FiFolder size={20}/>
        </div>
        <div className="mx-auto">
          <FiMail size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
