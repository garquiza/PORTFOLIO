import { ArrowUpRight } from "lucide-react";
import { Chip } from "../../components/ui/Chip";
import { externalLinkProps } from "../../lib/links";
import { PROJECT_TYPE_LABELS, type Project, type ProjectType } from "./types";

const TYPE_DOT: Record<ProjectType, string> = {
  professional: "bg-primary",
  personal: "bg-accent",
  academic: "bg-violet",
};

function CardLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      {...externalLinkProps}
      className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
    >
      {children}
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface/60 transition hover:border-accent/60">
      {" "}
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="flex items-center gap-2 text-sm text-muted">
            <span
              className={`size-2 rounded-full ${TYPE_DOT[project.type]}`}
              aria-hidden="true"
            />
            {PROJECT_TYPE_LABELS[project.type]}
            {project.featured && <span className="text-fg">· Featured</span>}
          </p>
          <h3 className="mt-2 font-display text-xl font-medium">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.role}</p>
        </div>

        <p className="text-pretty text-fg/90">{project.summary}</p>

        {project.features.length > 0 && (
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
        </ul>

        {(project.repositoryUrl || project.liveDemoUrl) && (
          <div className="mt-auto flex gap-4 pt-2">
            {project.repositoryUrl && (
              <CardLink href={project.repositoryUrl}>Source code</CardLink>
            )}
            {project.liveDemoUrl && (
              <CardLink href={project.liveDemoUrl}>Live demo</CardLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
