"use client";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <Link href={link}>
      <div className="w-80 lg:w-104 p-4 flex-shrink-0 my-1 overflow-hidden transform transition duration-500 hover:scale-105 group">
        <div className="relative rounded-md overflow-hidden shadow-xl bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-500 group-hover:shadow-blue-500/30">
          <div className="absolute inset-0 z-10 cursor-pointer"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-35 lg:h-50 object-cover rounded-t-md"
          />
          <div className="p-3">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
              {title}
            </h2>
            <p className="text-gray-200 mb-4">{description}</p>
          </div>

          {/* Glow border animation */}
          <div className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-blue-500 transition-all duration-500 pointer-events-none"></div>

          {/* Optional bottom reflection */}
          <div className="absolute bottom-0 left-1/2 w-4/5 h-1 bg-white/20 blur-md rounded-full transform -translate-x-1/2 group-hover:opacity-70 opacity-40 transition" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
