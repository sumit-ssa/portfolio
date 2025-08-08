import About from "@/components/cv/About";
import Bio from "@/components/cv/Bio";
import Education from "@/components/cv/Education";
import Header from "@/components/cv/Header";
import Work from "@/components/cv/Work";

const Cv = () => {
  return (
    <div className="min-h-screen my-14">
      <div className="max-w-xl mx-auto space-y-10">
        {/* Header Section */}
        <Header />

        {/* Bio Section */}
        <Bio />

        {/* About Section */}
        <About />

        {/* Work Experience Section */}
        <Work />

        {/* Eduation Section */}
        <Education />
      </div>
    </div>
  );
};

export default Cv;
