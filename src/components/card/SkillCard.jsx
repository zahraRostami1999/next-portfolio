import React from 'react';
import { motion } from 'framer-motion';

function SkillCard({ name, icon: Icon, bgColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}

      whileHover={{ 
        scale: 1.12, 
        y: -8,
        transition: { duration: 0.3, type: "spring", stiffness: 200 }
      }}

      className={`
        flex flex-col items-center justify-center gap-4 
        py-8 px-6 rounded-2xl shadow-xl backdrop-blur-sm
         cursor-default select-none
        ${bgColor === "bg-yellow-400" ? "text-black" : "text-white"}
        ${bgColor} 
        font-bold text-sm md:text-base
      `}
    >
      <Icon size={42} className="drop-shadow-md" />
      <span className="tracking-wide">{name}</span>
    </motion.div>
  );
}

export default SkillCard;