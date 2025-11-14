import React from 'react';
import ThemeSwitcher from '../day&night/ThemeSwitcher';
import { FiUser, FiCode, FiBookOpen, FiBriefcase, FiFolder, FiMail } from 'react-icons/fi';

function Sidebar({ onNavigate }) {
  const menuItems = [
    { id: 'about', icon: FiUser, label: "About Me" },
    { id: 'skills', icon: FiCode, label: 'Skills' },
    { id: 'education', icon: FiBookOpen, label: "Educations" },
    { id: 'experience', icon: FiBriefcase, label: "Work Experience" },
    { id: 'projects', icon: FiFolder, label: "Projects" },
    { id: 'contact', icon: FiMail, label: "Contact Me" },
  ];

  return (
    <>
      <div className="hidden md:flex p-5 bg-white w-20 h-[90vh] flex-col justify-center rounded-xl shadow-md border border-neutral-100">
        <div className="mb-8 flex justify-center">
          <ThemeSwitcher />
        </div>

        <nav className="flex-1 flex flex-col gap-8 justify-center">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  group relative mx-auto p-2 rounded-lg
                  transition-all duration-200 ease-out
                  text-neutral-600 hover:text-rose-400 hover:bg-gray-50
                `}
                aria-label={item.label}
              >
                <Icon size={20} />

                <span className="absolute right-full top-1/2 -translate-y-1/5 px-2 py-1.5 bg-neutral-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-lg z-50">
        <nav className="flex justify-around items-center py-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex flex-col items-center p-2 text-neutral-600 hover:text-rose-400 transition-colors"
                aria-label={item.label}
              >
                <Icon size={22} />
                <span className="text-xs mt-1">{item.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;