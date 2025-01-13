import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import universityLogo1 from '../../public/PTRSU_logo.png'
import universityLogo2 from '../../public/kalinga.png'
import ssaLogo from '../../public/ssa_logo.png'
import xhitizLogo from '../../public/xhitizLogo.png'

export const SocialLinksData = [
    {
        link: "https://github.com/sumit-ssa",
        Icon: Github,
    },
    {
        link: "https://www.linkedin.com/in/sumit-verma-07835a210/?trk=opento_sprofile_details",
        Icon: Linkedin,
    },
    {
        link: "https://www.instagram.com/__fire_hawk/",
        Icon: Instagram,
    },
    {
        link: "https://x.com/_Fire_hawk",
        Icon: Twitter,
    },
];

export const TechnologiesData = [
    { icon: "devicon-html5-plain", name: "HTML5" },
    { icon: "devicon-css3-plain", name: "CSS3" },
    { icon: "devicon-bootstrap-plain", name: "Bootstrap" },
    { icon: "devicon-sass-original", name: "SASS" },
    { icon: "devicon-tailwindcss-original", name: "Tailwind CSS" },
    { icon: "devicon-javascript-plain", name: "Javascript" },
    { icon: "devicon-typescript-plain", name: "Typescript" },
    { icon: "devicon-react-original", name: "React JS" },
    { icon: "devicon-nextjs-original-wordmark bg-white", name: "Next JS" },
    { icon: "devicon-github-original bg-white", name: "Github" },
    { icon: "devicon-postman-plain", name: "Postman" },
    { icon: "devicon-vercel-original bg-white", name: "Vercel" },
    { icon: "devicon-figma-plain", name: "Figma" },
    { icon: "devicon-jenkins-line", name: "Jenkins" },
    { icon: "devicon-jest-plain", name: "Jest" },
]

export const EducationData = [
    {
        id: 2,
        logo: universityLogo2,
        name: "Kalinga University",
        course: "Master of Compluter Application",
        location: "New Raipur, Chhattisgarh, India",
        showRightSide: false
    },
    {
        id: 1,
        logo: universityLogo1,
        name: "Pt. Ravishankar Shukla University",
        course: "Bachelor of Compluter Application",
        location: "Raipur, Chhattisgarh, India",
        showRightSide: false
    },
]

export const ExperienceData = [
    {
        id: 1,
        logo: ssaLogo,
        name: "Social Seller Technologies",
        course: "Senior Frontend Developer",
        location: "Raipur, Chhattisgarh, India",
        showRightSide: true,
        startDate: "October 2022",
        endDate: "Present",
        duration: "2 Years 3 Months"
    },
    {
        id: 2,
        logo: xhitizLogo,
        name: "Xhitiz IT Solutions",
        course: "Junior Frontend Developer",
        location: "Raipur, Chhattisgarh, India",
        showRightSide: true,
        startDate: "March 2020",
        endDate: "February 2022",
        duration: "2 Years"
    },
    {
        id: 3,
        logo: xhitizLogo,
        name: "Xhitiz IT Solutions",
        course: "Internship",
        location: "Raipur, Chhattisgarh, India",
        showRightSide: true,
        startDate: "September 2019",
        endDate: "February 2020",
        duration: "6 Months"
    },
]
