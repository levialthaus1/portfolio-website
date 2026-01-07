import Header from "../general/Header";
import { myProjects } from "./MyProjects";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects">
      <Header title="Recent Projects" />
      <div
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10
        overflow-hidden"
      >
        {myProjects.map((p, index) => {
          return (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <ProjectCard
                title={p.title}
                imagePath={p.imagePath}
                description={p.description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
