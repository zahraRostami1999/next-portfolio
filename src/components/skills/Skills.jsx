import { motion } from 'framer-motion';
import { skills } from '@/data/Skills';
import SkillCard from '../card/SkillCard';

export const Skills = () => {
  return (
    <div className="bg-(--bg-container) backdrop-blur-sm rounded-2xl px-5 py-10 border border-(--border)">
      <h2 className="text-4xl font-extrabold md:text-5xl text-center mb-10 text-(--text-secondary)">
        Skills
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