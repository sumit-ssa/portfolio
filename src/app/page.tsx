"use client";

import About from "@/components/home/about/About";
import Contact from "@/components/home/contact/Contact";
import Education from "@/components/home/education/Education";
import Hero from "@/components/home/hero/Hero";
import Projects from "@/components/home/projects/Projects";
import Container from "@/components/ui/Container";
// import TextPressure from "@/components/ui/HyperSpeed";

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <div className="w-full flex flex-col gap-20 mt-20">
          <About />
          <Education />
          <Projects />
          <Contact />
        </div>
      </Container>
    </>
  );
}
