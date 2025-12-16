import React from 'react';
import { Building2, Briefcase } from 'lucide-react';

function Experience() {
  return (
    <div className="pt-0 p-5 rounded-xl text-(--text-main)">
      <section className="pt-5 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-(--text-secondary) text-center mb-20">
            Work Experience
          </h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-(--bg-container)"></div>

            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-(--text-main) font-bold text-2xl -translate-y-8">
              2025
            </div>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-(--text-main) font-bold text-2xl bottom-[390px]">
              2023
            </div>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-(--text-main) font-bold text-2xl -bottom-[30px]">
              2020
            </div>

            <div className="space-y-20">
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-10">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-(--accent) rounded-full ring-8 ring-white shadow-xl -bottom-18"></div>

                <div className="w-full md:w-3/5 md:pr-16">
                  <div className="bg-(--bg-container) rounded-2xl shadow-xl p-7 border border-(--border) hover:shadow-2xl hover:border-(--accent) transition-all duration-500">
                    <div className="mb-8">
                      <h3 className="text-3xl font-extrabold text-(--text-secondary)">
                        Frontend Developer
                      </h3>
                      <p className="text-xl text-(--text-main) font-semibold mt-2">
                        Dec 2023 – Present
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-(--bg-main) rounded-xl">
                        <Building2 className="w-8 h-8 text-(--text-primary)" />
                      </div>
                      <p className="text-xl font-bold text-(--text-primary)">
                        Dezhafzar Dadehban Sablan Sarir
                      </p>
                    </div>

                    <ul className="space-y-4 text-(--text-main) text-lg">
                      <li className="flex items-start">
                        <span className="text-(--accent) text-3xl mr-4 mt-1">•</span>
                        <span>Developing modern web applications using React, Next.js and integrating with RESTful APIs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-(--accent) text-3xl mr-4 mt-1">•</span>
                        <span>Designing responsive, performant, and user-friendly interfaces in collaboration with design teams</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-(--accent) text-3xl mr-4 mt-1">•</span>
                        <span>Implementing state management with Redux Toolkit and styling with Tailwind CSS across multiple projects</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full md:w-1/2"></div>
              </div>

              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-10">

                <div className="w-full md:w-1/2"></div>

                <div className="w-full md:w-3/5 md:pl-16">
                  <div className="bg-(--bg-container) rounded-2xl shadow-xl p-7 border border-(--border) hover:shadow-2xl hover:border-(--accent) transition-all duration-500">
                    <div className="mb-8">
                      <h3 className="text-3xl font-extrabold text-(--text-secondary)">
                        Frontend Developer
                      </h3>
                      <p className="text-xl text-(--text-main) font-semibold mt-2">
                        Apr 2020 – Dec 2023
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-(--bg-main) rounded-xl">
                        <Briefcase className="w-8 h-8 text-(--text-primary)" />
                      </div>
                      <p className="text-xl font-bold text-(--text-primary)">
                        Freelance
                      </p>
                    </div>

                    <ul className="space-y-4 text-(--text-main) text-lg">
                      <li className="flex items-start">
                        <span className="text-(--accent) text-3xl mr-4 mt-1">•</span>
                        <span>Designing and building complete websites from scratch using HTML, CSS, and JavaScript</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience;