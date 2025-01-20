import Image from "next/image";
import avatar from "../../../public/cv-logo.jpg";

const Header = () => {
  return (
    <div className="flex items-start gap-6">
      <div className="relative">
        <Image
          src={avatar}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-700"
        />
        <span className="absolute bottom-0 right-0 text-lg">👾</span>
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-gray-300">Sumit Verma</h1>
        <p className="text-gray-400">Frontend Developer</p>
      </div>
    </div>
  );
};

export default Header;
