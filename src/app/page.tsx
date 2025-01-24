import About from "@/components/home/about/About";
import Contact from "@/components/home/contact/Contact";
import Education from "@/components/home/education/Education";
import Hero from "@/components/home/hero/Hero";
import Projects from "@/components/home/projects/Projects";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <Container>
      <div className="w-full flex flex-col gap-20">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </div>
    </Container>
  );
}
