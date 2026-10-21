import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, title, description, children }: SectionProps) {
  const { ref, seen } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={`${id}-title`}
      className={`mx-auto max-w-5xl px-6 py-16 transition duration-700 ease-out md:py-20 ${
        seen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <h2
        id={`${id}-title`}
        className="font-display text-3xl font-semibold tracking-tight"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-prose text-muted">{description}</p>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}
