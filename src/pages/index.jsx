import React, { useRef } from 'react';
import Sidebar from "@/components/sidebar/Sidebar";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Education from "@/components/education/Education";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="flex flex-row-reverse h-screen gap-5 pt-8">
      <Sidebar
        onNavigate={(section) => {
          const refs = {
            about: aboutRef,
            skills: skillsRef,
            education: educationRef,
            experience: experienceRef,
            projects: projectsRef,
            contact: contactRef,
          };
          scrollToSection(refs[section]);
        }}
      />

      <div className="flex-1 rounded-xl overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar pb-5 pl-1 space-y-12">
          <section ref={aboutRef} id="about"><About /></section>
          <section ref={skillsRef} id="skills"><Skills /></section>
          <section ref={educationRef} id="education"><Education /></section>
          <section ref={experienceRef} id="experience"><Projects /></section>
          <section ref={projectsRef} id="projects"><Projects /></section>
          <section ref={contactRef} id="contact"><Contact /></section>
        </div>
      </div>
    </div>
  );
}