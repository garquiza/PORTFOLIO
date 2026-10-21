import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Projects } from "./Projects";
import type { Project } from "./types";

const base: Project = {
  slug: "a",
  title: "Alpha",
  summary: "s",
  type: "professional",
  role: "r",
  features: [],
  technologies: ["Java"],
  featured: false,
  published: true,
};

describe("Projects", () => {
  it("shows an empty state when nothing is published", () => {
    render(<Projects items={[{ ...base, published: false }]} />);
    expect(screen.getByText("Projects are on the way.")).toBeInTheDocument();
  });

  it("filters the list when a type is chosen", () => {
    render(
      <Projects
        items={[base, { ...base, slug: "b", title: "Beta", type: "personal" }]}
      />,
    );
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Personal" }));
    expect(screen.queryByText("Alpha")).not.toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });
});
