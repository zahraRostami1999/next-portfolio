import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

function Education() {
  return (
    <section className="px-5 py-10 rounded-xl">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold md:text-5xl text-center mb-10 text-(--text-secondary)"
        >
          Education
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full 
                          bg-linear-to-b from-cyan-500 via-cyan-500/30 to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-center mb-16"
          >
            <div className="flex-1 md:w-1/2"></div>

            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 
                            w-12 h-12 bg-cyan-500 rounded-full border-4 border-(--bg-container) 
                            shadow-lg shadow-cyan-500/50 z-10 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>

            <div className="flex-1 md:w-1/2 md:pl-16">
              <div className="bg-(--bg-container) backdrop-blur-sm border border-(--border) 
                              rounded-2xl p-7 shadow-xl hover:shadow-cyan-500/20 
                              transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-18 h-18 text-cyan-400" />
                  <span className="text-cyan-400 font-bold text-lg">Bachelor of Science</span>
                </div>
                <h3 className="text-2xl font-bold text-(--text-main)">Computer Engineering</h3>
                <p className="text-(--text-main) mt-2">University of Mohaghegh Ardabili</p>
                <p className="font-semibold text-(--text-main) mt-4">September 2019 – June 2024</p>
                <div className="mt-4 inline-block bg-cyan-500/10 text-cyan-400 
                                px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30">
                  GPA: 17.20 / 20
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col md:flex-row items-center"
          >
            <div className="flex-1 md:w-1/2 md:pr-16 text-left">
              <div className="bg-(--bg-container) backdrop-blur-sm border border-(--border) 
                    rounded-2xl p-7 shadow-xl hover:shadow-yellow-500/20 
                    transition-shadow duration-300">
                <div className="flex items-center justify-end md:justify-start gap-3 mb-3">
                  <School className="w-18 h-18 text-yellow-400" />
                  <span className="text-yellow-400 font-bold text-lg">High School Diploma</span>
                </div>

                <h3 className="text-2xl font-bold text-(--text-main)">
                  Experimental Sciences (Biology & Chemistry)
                </h3>

                <p className="text-(--text-main) mt-2 text-lg font-medium">
                  Farzanegan High School — NODET
                </p>
                <p className="text-(--text-main)">
                  National Organization for Development of Exceptional Talents<br />
                </p>

                <p className="text-(--text-main) font-semibold mt-4 text-left">September 2015 – June 2018</p>

              </div>
            </div>

            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 
                  w-12 h-12 bg-yellow-500 rounded-full border-4 border-(--bg-container) 
                  shadow-lg shadow-yellow-500/50 z-10 flex items-center justify-center">
              <School className="w-8 h-8 text-white" />
            </div>

            <div className="flex-1 md:w-1/2"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;