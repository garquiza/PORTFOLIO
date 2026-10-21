import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the name and a skip link", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Nicole Arquiza" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Skip to content" }),
    ).toBeInTheDocument();
  });

  it("renders every section from the navigation", () => {
    render(<App />);
    for (const name of [
      "About me",
      "Projects",
      "Skills",
      // "Achievements and certificates",
      "Let’s talk",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name }),
      ).toBeInTheDocument();
    }
  });
});
