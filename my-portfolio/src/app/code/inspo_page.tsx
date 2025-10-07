"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "./projectsData";
// import WavyFooter from "../components/WavyFooter";

// Project card component with hover effect
const ProjectCard = ({ 
  project, 
  onClick,
  className = "" 
}: { 
  project: typeof projects[0], 
  onClick: () => void,
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-[var(--secondary)] rounded-lg overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer ${className}`}
      style={{ 
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 12px 20px rgba(0, 0, 0, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-50'}`}></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-[var(--primary)]">{project.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-[var(--primary)] text-white text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Filter projects by category
const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export default function CodeProjects() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const handleProjectClick = (projectId: string) => {
    setIsTransitioning(true);
    
    // Navigate after transition animation
    setTimeout(() => {
      router.push(`/code/${projectId}`);
    }, 300);
  };
  
  // Get projects by category
  const clientProjects = getProjectsByCategory("client");
  const academicProjects = getProjectsByCategory("academic");
  const hobbyProjects = getProjectsByCategory("hobby");
  
  return (
    <div className="min-h-screen flex flex-col bg-[var(--primary)]">
      <div className={`flex-grow p-6 md:p-12 text-[var(--secondary)] transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <header className="mb-12">
          <Link href="/" className="text-[var(--secondary)] hover:underline mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-cherry-bomb-one)]">Coding Projects</h1>
          <p className="text-xl opacity-80">A collection of my recent work and experiments</p>
        </header>
        
        {/* Client Work Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Client work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientProjects.length > 0 && (
              <div className="md:col-span-3">
                <ProjectCard 
                  project={clientProjects[0]} 
                  onClick={() => handleProjectClick(clientProjects[0].id)} 
                  className="h-[100px]"
                />
              </div>
            )}
            {clientProjects.slice(1, 4).map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => handleProjectClick(project.id)} 
              />
            ))}
          </div>
        </section>
        
        {/* Academic Work Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Academic work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicProjects.slice(0, 2).map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => handleProjectClick(project.id)} 
                className="h-[300px]"
              />
            ))}
          </div>
        </section>
        
        {/* Hobby Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Hobby projects</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {hobbyProjects.slice(0, 2).map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => handleProjectClick(project.id)} 
                  className="h-[300px]"
                />
              ))}
            </div>
            {hobbyProjects.length > 2 && (
              <ProjectCard 
                project={hobbyProjects[2]} 
                onClick={() => handleProjectClick(hobbyProjects[2].id)} 
                className="h-[300px]"
              />
            )}
          </div>
        </section>
      </div>
      {/* <WavyFooter /> */}
    </div>
  );
}