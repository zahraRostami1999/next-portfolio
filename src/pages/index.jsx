import Sidebar from "@/components/sidebar/Sidebar";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Education from "@/components/education/Education";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
export default function Home() {
  return (
    <div className="flex h-screen gap-5 pt-10">
      <Sidebar />
      <div className="flex-1 rounded-xl overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar pb-5 pl-1 space-y-5">
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}
