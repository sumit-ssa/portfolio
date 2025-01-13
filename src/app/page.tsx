import About from "@/components/home/about/About";
import Education from "@/components/home/education/Education";
import Hero from "@/components/home/hero/Hero";
import Projects from "@/components/home/projects/Projects";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-20">
      <Hero />
      <About />
      <Education />
      <Projects />
    </div>
  );
}
