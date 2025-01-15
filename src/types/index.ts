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
}