import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../../content/profile";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-semibold">
          {profile.name}
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label="Primary" className="hidden md:block">
            <NavLinks className="flex gap-6" />
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="rounded-control p-2 text-muted hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border/60 px-6 py-4 md:hidden"
        >
          <NavLinks
            className="flex flex-col gap-4"
            onNavigate={() => setOpen(false)}
          />
        </nav>
      )}
    </header>
  );
}
