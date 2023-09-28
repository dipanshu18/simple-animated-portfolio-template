import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen my-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
