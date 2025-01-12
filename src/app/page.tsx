import About from "@/components/home/about/About";
import Education from "@/components/home/Education";
import Hero from "@/components/home/hero/Hero";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-20">
      <Hero />
      <About />
      <Education />
    </div>
  );
}
