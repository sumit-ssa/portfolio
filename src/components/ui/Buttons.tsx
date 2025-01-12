import { HireButtonProps } from "@/types";

export const HireButtons = ({ title, link }: HireButtonProps) => {
  return (
    <a
      className="hire-button font-semibold sm:text-base md:text-lg"
      href={link}
    >
      {title}
    </a>
  );
};
