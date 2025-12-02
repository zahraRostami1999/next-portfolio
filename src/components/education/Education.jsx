import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react'; 

function Education() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Education <span className="text-cyan-400">& Journey</span>
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
                            w-5 h-5 bg-cyan-500 rounded-full border-4 border-(--bg-container) 
                            shadow-lg shadow-cyan-500/50 z-10 flex items-center justify-center">
              <GraduationCap className="w-3 h-3 text-white" />
            </div>

            <div className="flex-1 md:w-1/2 md:pl-16">
              <div className="bg-(--bg-container) backdrop-blur-sm border border-(--border) 
                              rounded-2xl p-7 shadow-xl hover:shadow-cyan-500/20 
                              transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-7 h-7 text-cyan-400" />
                  <span className="text-cyan-400 font-bold text-lg">Bachelor of Science</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Computer Engineering</h3>
                <p className="text-gray-300 mt-2">University of Mohaghegh Ardabili</p>
                <p className="text-sm text-gray-400 mt-4">September 2018 – June 2023</p>
                <div className="mt-4 inline-block bg-cyan-500/10 text-cyan-400 
                                px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30">
                  GPA: ۱۶.۸۵ / ۲۰ (Top 10%)
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
            <div className="flex-1 md:w-1/2 md:pr-16 text-right">
              <div className="bg-(--bg-container) backdrop-blur-sm border border-(--border) 
                              rounded-2xl p-7 shadow-xl hover:shadow-yellow-500/20 
                              transition-shadow duration-300">
                <div className="flex items-center justify-end md:justify-start gap-3 mb-3">
                  <School className="w-7 h-7 text-yellow-400" />
                  <span className="text-yellow-400 font-bold text-lg">High School Diploma</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Mathematics & Physics</h3>
                <p className="text-gray-300 mt-2">
                  National Organization for Development of Exceptional Talents
                </p>
                <p className="text-gray-300 font-medium">سمپاد اردبیل (NODET)</p>
                <p className="text-sm text-gray-400 mt-4">September 2014 – June 2018</p>
                <div className="mt-4 inline-block bg-yellow-500/10 text-yellow-400 
                                px-4 py-2 rounded-full text-sm font-medium border border-yellow-500/30">
                  Ranked in Top 1% of National University Entrance Exam (کنکور)
                </div>
              </div>
            </div>

            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 
                            w-5 h-5 bg-yellow-500 rounded-full border-4 border-(--bg-container) 
                            shadow-lg shadow-yellow-500/50 z-10 flex items-center justify-center">
              <School className="w-3 h-3 text-white" />
            </div>
            
            <div className="flex-1 md:w-1/2"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;