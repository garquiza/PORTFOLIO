import { describe, expect, it } from "vitest";
import { getVisibleProjects } from "./selectors";
import type { Project } from "./types";

const makeProject = (overrides: Partial<Project>): Project => ({
  slug: "p",
  title: "P",
  summary: "s",
  type: "personal",
  role: "r",
  features: [],
  technologies: [],
  featured: false,
  published: true,
  ...overrides,
});

describe("getVisibleProjects", () => {
  it("hides unpublished projects", () => {
    const items = [
      makeProject({ slug: "a" }),
      makeProject({ slug: "b", published: false }),
    ];
    expect(getVisibleProjects(items, "all").map((p) => p.slug)).toEqual(["a"]);
  });

  it("filters by type", () => {
    const items = [
      makeProject({ slug: "a", type: "academic" }),
      makeProject({ slug: "b", type: "personal" }),
    ];
    expect(getVisibleProjects(items, "academic").map((p) => p.slug)).toEqual([
      "a",
    ]);
  });

  it("lists featured projects first", () => {
    const items = [
      makeProject({ slug: "a" }),
      makeProject({ slug: "b", featured: true }),
    ];
    expect(getVisibleProjects(items, "all").map((p) => p.slug)).toEqual([
      "b",
      "a",
    ]);
  });
});
