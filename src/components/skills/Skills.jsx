import React from 'react';
import { 
  SiJavascript, 
  SiReact, 
  SiGit, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux,
  SiReactquery,
  SiNextdotjs
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: SiJavascript, highlight: true },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Git", icon: SiGit },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "React Query", icon: SiReactquery },
    { name: "Next.js", icon: SiNextdotjs }, 
  ];

  return (
    <div className="bg-(--bg-container) backdrop-blur-sm rounded-2xl p-8 border border-(--border)">
      <h2 className="text-2xl font-semibold text-center mb-8 text-white">
        My<span className="text-cyan-400"> Skills</span>
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => {
          const Icon = skill.icon;
          const isHighlighted = skill.highlight;

          return (
            <div
              key={skill.name}
              className={`
                group relative flex flex-col items-center justify-center 
                p-6 rounded-xl transition-all duration-300 cursor-default
                ${isHighlighted 
                  ? 'bg-black text-white shadow-2xl shadow-black/50' 
                  : 'bg-white text-black shadow-lg hover:shadow-2xl hover:scale-105'
                }
              `}
            >
              <Icon className="text-4xl mb-3 group-hover:scale-110 transition-transform" />
              
              <span className="text-sm font-medium tracking-wide">
                {skill.name}
              </span>

              {!isHighlighted && (
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;