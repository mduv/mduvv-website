import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-40 items-center justify-center bg-charcoal">
        <Icon className="h-12 w-12 text-white/80 transition-transform group-hover:scale-110" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading mb-2 text-lg font-semibold text-charcoal">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-charcoal/60">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors hover:underline"
            >
              View live &rarr;
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:underline"
          >
            View on GitHub &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
