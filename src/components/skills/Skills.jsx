import { motion } from 'framer-motion';
import { skills } from '@/data/Skills';
import SkillCard from '../card/SkillCard';

export const Skills = () => {
  return (
    <div className="bg-(--bg-container) backdrop-blur-sm rounded-2xl p-8 border border-(--border)">
      <h2 className="text-3xl font-semibold text-center mb-10 text-(--text-main)">
        My<span className="text-(--text-secondary)"> Skills</span>
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.3   
            }}
          >
            <SkillCard 
              name={skill.name} 
              icon={skill.icon} 
              bgColor={skill.bg} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};