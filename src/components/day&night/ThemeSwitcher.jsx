import React, { useState } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="mx-auto p-1.5 rounded-lg transition-colors duration-200 hover:bg-gray-100"
      aria-label="تغییر تم"
    >
      {isDark ? (
        <HiOutlineMoon size={30} className="text-neutral-300" />
      ) : (
        <HiOutlineSun size={30} className="text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeSwitcher;