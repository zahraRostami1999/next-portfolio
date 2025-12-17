import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Figma, X } from 'lucide-react';
import { ProjectsData } from '@/data/ProjectsData';
import Image from 'next/image';

function Projects() {
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const techFilters = ['All', 'React', 'Next.js', 'TypeScript'];

  const filteredProjects = selectedTech === 'All'
    ? ProjectsData
    : ProjectsData.filter(project =>
      project.technologies.some(tech =>
        tech.toLowerCase().includes(selectedTech.toLowerCase())
      )
    );
  return (
    <div className="bg-(--bg-container) p-5 py-10 rounded-xl shadow-md border border-(--border) text-(--text-main)">
      <section className="px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-(--text-secondary) text-center mb-10"
          >
            Projects
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {techFilters.map((tech, index) => (
              <motion.button
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedTech(tech)}
                className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${selectedTech === tech
                  ? 'bg-(--accent) text-white shadow-lg'
                  : 'bg-white text-(--text-secondary) border border-(--border) hover:border-(--accent) hover:shadow-md'
                  }`}
              >
                {tech === 'All' ? 'All Projects' : tech}
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden border border-(--border) hover:border-(--accent) hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative overflow-hidden flex justify-center">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      className="w-32 h-32 transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-semibold">Click to view details</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-(--text-secondary) mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-(--accent) font-medium mb-4">{project.date}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies
                        .filter(tech => ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'].includes(tech))
                        .slice(0, 4)
                        .map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-(--bg-main) text-(--text-primary) text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs text-gray-500">+{project.technologies.length - 4} more</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-xl text-gray-500 py-20"
            >
              No projects found with "{selectedTech}"
            </motion.p>
          )}
        </div>
      </section>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 "
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <div className="relative px-5 pt-15">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-4 p-2 bg-white/80 rounded-full text-(--text-secondary) hover:bg-white hover:text-red-800 duration-300 shadow-lg z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <Image
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-96  rounded-2xl"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl md:text-4xl font-extrabold text-(--text-secondary) mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-(--accent) font-medium mb-6">{selectedProject.date}</p>

                <p className="text-lg text-(--text-main) leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-(--bg-main) text-(--text-primary) rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-(--accent) hover:bg-(--accent-hover) text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>

                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </a>

                  {selectedProject.figmaLink && (
                    <a
                      href={selectedProject.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                    >
                      <Figma className="w-5 h-5" />
                      Figma Design
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div >
  )
}

export default Projects;
