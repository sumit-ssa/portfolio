import { Github, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import universityLogo1 from '../../public/PTRSU_logo.png'
import universityLogo2 from '../../public/kalinga.png'
import ssaLogo from '../../public/ssa_logo.png'
import xhitizLogo from '../../public/xhitizLogo.png'
import mtt from '../../public/projects/mtt.png'
import ssa from '../../public/projects/ssa.png'
import logistics from '../../public/projects/logistics.png'
import vilki from '../../public/projects/vilki.png'

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
    { icon: "devicon-nextjs-plain bg-white", name: "Next JS" },
    { icon: "devicon-github-original bg-white ", name: "Github" },
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
        course: "Senior Frontend Developer || Team Leader",
        location: "Raipur, Chhattisgarh, India",
        showRightSide: true,
        startDate: "October 2022",
        endDate: "Present",
        duration: "2 Years 3 Months",
        info: `As a technical leader & Senior Frontend Developer, I orchestrated the design and development of mission-critical bidding systems, encompassing robust back-end, 
        front-end, and mobile applications. My strategic oversight ensured seamless functionality and high performance across all platforms. 
        I led and mentored a high-performing team through various complex software development projects, aligning our technical to consistently delivering high-quality solutions.`
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
        duration: "2 Years",
        info: "Worked on analysing the design, development and maintenance work for a websites."

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
        duration: "6 Months",
        info: "Worked on development of verious websites."
    },
]

export const ProjectsData = [
    {
        id: 1,
        title: "Multi-Tenant Website Builder",
        description: "A multi-tenant website builder, a scalable and user-friendly platform that empowers businesses and individuals to create fully customized websites without technical expertise",
        technologies: [
            { id: "js", name: "Javascript" },
            { id: "react", name: "React" },
            { id: "tailwind", name: "Tailwind CSS" },
            { id: "axios", name: "Axios" }
        ],
        imageUrl: mtt,
        url: "https://sumit.socialseller.in/"
    },
    {
        id: 2,
        title: "Social Seller Technologies Website",
        description: "Social seller Academy, a one-stop-destination for all digital needs, which educate people about the vast opportunities in online selling in India. This website is entry point of websites builter",
        technologies: [
            { id: "react", name: "React" },
            { id: "next", name: "Next.js" },
            { id: "tailwind", name: "Tailwind CSS" },
            { id: "framer", name: "Framer Motion" }
        ],
        imageUrl: ssa,
        url: "https://socialseller.in/"
    },
    {
        id: 3,
        title: "Vilki Medicart",
        description: "A billing software platform designed to streamline B2B transactions for both retailers and wholesalers. Transforming Pharmaceutical Sector Across Bharat",
        technologies: [
            { id: "react", name: "React" },
            { id: "tailwind", name: "Tailwind CSS" },
            { id: "axios", name: "Axios" },
            { id: "Redux", name: "Redux" }
        ],
        imageUrl: vilki,
        url: "https://demo.devops.xhitiz.com/xlogistics/"
    },
    {
        id: 4,
        title: "XLogistics Website",
        description: "Smart Solution from pickup to destination, XLogistics is the leading digital road freight platform. Clients can book, track and pay for all types of cargo transportation across the island. ",
        technologies: [
            { id: "bootstrap", name: "Bootstrap" },
            { id: "javascript", name: "Javascript" },
            { id: "php", name: "PHP" },
            { id: "laravel", name: "Laravel" },
        ],
        imageUrl: logistics,
        url: "https://demo.devops.xhitiz.com/xlogistics/"
    },
]

export const ContactData = [
    {
        Icon: Linkedin,
        link: "https://www.linkedin.com/in/sumit-verma-07835a210/",
        title: "LinkedIn"

    },
    {
        Icon: Phone,
        link: "tel:7999001618",
        title: "7999001618"
    },
    {
        Icon: Mail,
        link: "mailto:sumeet0604.sv@gmail.com",
        title: "sumeet0604.sv@gmail.com"
    },
]