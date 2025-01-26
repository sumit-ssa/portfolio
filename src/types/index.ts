import { StaticImageData } from "next/image";

export interface HireButtonProps {
    title: string;
    link: string;
}

export interface SectionTitleProps {
    title: string;
}

export interface ProfileProps {
    id: number,
    logo: StaticImageData;
    name: string;
    course: string;
    location: string;
    startDate?: string;
    endDate?: string;
    duration?: string;
    showRightSide?: boolean,
    info?: string;
}

export interface WorkProps {
    id: number,
    name: string,
    designation: string,
    startDate: string,
    endDate: string,
    location: string
}

export interface Technology {
    name: string;
}

export interface ProjectCardProps {
    id: number;
    title: string;
    technologies: Technology[];
    description: string;
    imageUrl: StaticImageData;
    url: string;
    // route: string;
    style?: boolean;
}

export interface StudyPoprs {
    id: number;
    name: string;
    course: string;
    location: string;
}