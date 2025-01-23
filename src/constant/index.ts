import { Github, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import universityLogo1 from '../../public/PTRSU_logo.png'
import universityLogo2 from '../../public/kalinga.png'
import ssaLogo from '../../public/ssa_logo.png'
import xhitizLogo from '../../public/xhitizLogo.png'
import mtt from '../../public/projects/mtt.png'
import ssa from '../../public/projects/ssa.png'
import logistics from '../../public/projects/logistics.png'
import vilki from '../../public/projects/vilki.png'
import happy_staff from '../../public/projects/happystaff.png'
import infinix from '../../public/projects/infinixcrm.png'

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
        id: 1,
        logo: universityLogo2,
        name: "Kalinga University",
        course: "Master of Compluter Application",
        location: "New Raipur, Chhattisgarh, India",
        showRightSide: false
    },
    {
        id: 2,
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
        course: "Team Leader",
        location: "Raipur, Chhattisgarh, India",
        showRightSide: true,
        startDate: "July 2024",
        endDate: "Present",
        // duration: "6 Months",
        info: `As a technical leader & Senior Frontend Developer, I orchestrated the design and development of mission-critical bidding systems, encompassing robust back-end, 
        front-end, and mobile applications. My strategic oversight ensured seamless functionality and high performance across all platforms. 
        I led and mentored a high-performing team through various complex software development projects, aligning our technical to consistently delivering high-quality solutions.`
    },
    {
        id: 2,
        logo: ssaLogo,
        name: "Social Seller Technologies",
        course: "Senior Frontend Developer",
        location: "Raipur, Chhattisgarh, India",
        showRightSide: true,
        startDate: "October 2022",
        endDate: "July 2024",
        duration: "1 Year 9 Months",
        info: `As a Senior Front-End Developer with over 2 years of experience, I specialize in building scalable, 
        high-performance web applications with a strong focus on user experience. I have a proven track record of leading development teams, 
        driving projects from ideation to production, and ensuring the seamless integration of design and functionality. My expertise includes developing modern web applications using cutting-edge technologies, optimizing front-end performance, and maintaining code quality through best practices.`
    },
    {
        id: 3,
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
        id: 4,
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

export const WorkData = [
    {
        id: 1,
        name: "Social Seller Technologies",
        designation: "Team Leader",
        location: "Raipur, Chhattisgarh, India",
        startDate: "2024",
        endDate: "Present",
    },
    {
        id: 2,
        name: "Social Seller Technologies",
        designation: "Senior Frontend Developer",
        location: "Raipur, Chhattisgarh, India",
        startDate: "2022",
        endDate: "2024",
    },
    {
        id: 3,
        name: "Xhitiz IT Solutions",
        designation: "Junior Frontend Developer",
        location: "Raipur, Chhattisgarh, India",
        startDate: "2021",
        endDate: "2022",
    },
    {
        id: 4,
        name: "Xhitiz IT Solutions",
        designation: "Internship",
        location: "Raipur, Chhattisgarh, India",
        startDate: "2019",
        endDate: "2020",
    },
]

export const StudyData = [
    {
        id: 1,
        name: "Kalinga University",
        course: "Master of Compluter Application",
        location: "New Raipur, Chhattisgarh, India",
    },
    {
        id: 2,
        logo: universityLogo1,
        name: "Pt. Ravishankar Shukla University",
        course: "Bachelor of Compluter Application",
        location: "Raipur, Chhattisgarh, India",
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
        url: "https://sumit.socialseller.in/",
        route: "multi-tenant-website-builder"
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
        url: "https://socialseller.in/",
        route: "social-seller-technologies"
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
        url: "https://demo.devops.xhitiz.com/xlogistics/",
        route: "vilki-medicart"
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
        url: "https://demo.devops.xhitiz.com/xlogistics/",
        route: "x-logistics"
    },
    {
        id: 5,
        title: "Happy Staff",
        description: "Happy Staff is a smart task management app designed to boost productivity.. It combines traditional task organization features with a unique performance and coin system. Every completed task earns you coins, These coins can be redeemed via UPI",
        technologies: [
            { id: "js", name: "Javascript" },
            { id: "react", name: "React" },
            { id: "tailwind", name: "Tailwind CSS" },
            { id: "axios", name: "Axios" }
        ],
        imageUrl: happy_staff,
        url: "https://happystaff.socialseller.in/auth",
        route: "happy-staff"
    },
    {
        id: 6,
        title: "Infinix CRM",
        description: "Smart Solution from pickup to destination, XLogistics is the leading digital road freight platform. Clients can book, track and pay for all types of cargo transportation across the island. ",
        technologies: [
            { id: "js", name: "Javascript" },
            { id: "react", name: "React" },
            { id: "tailwind", name: "Tailwind CSS" },
            { id: "axios", name: "Axios" }
        ],
        imageUrl: infinix,
        url: "https://infinixcrm.com/auth",
        route: "infinix-crm"
    },
]