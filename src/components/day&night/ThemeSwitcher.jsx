import React, { useState, useEffect } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "dark" || (saved === null && prefersDark);

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleChangeTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  return (
    <button
      onClick={handleChangeTheme}
      className="mx-auto p-3 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 transition-all hover:scale-110 shadow-md"
      aria-label="تغییر تم"
    >
      {isDark ? (
        <HiOutlineMoon size={28} className="text-gray-300" />
      ) : (
        <HiOutlineSun size={28} className="text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeSwitcher;