import { useEffect, useState } from "react";
import { profile } from "../../content/profile";
import { prefersReducedMotion } from "../../lib/motion";

const STORAGE_KEY = "intro-seen";
const SHOW_MS = 2200;
const FADE_MS = 400;

type Phase = "show" | "leave" | "gone";

function shouldPlay(): boolean {
  if (prefersReducedMotion()) return false;
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return true;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {}
}

export function IntroSplash() {
  const [phase, setPhase] = useState<Phase>(() =>
    shouldPlay() ? "show" : "gone",
  );

  useEffect(() => {
    if (phase === "gone") return;
    if (phase === "show") markSeen();

    const timer = setTimeout(
      () => setPhase(phase === "show" ? "leave" : "gone"),
      phase === "show" ? SHOW_MS : FADE_MS,
    );
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    const skip = (event: KeyboardEvent) => {
      if (event.key === "Escape")
        setPhase((current) => (current === "show" ? "leave" : current));
    };
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, []);

  if (phase === "gone") return null;

  const leaving = phase === "leave";
  const user = profile.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      aria-hidden="true"
      onClick={() => setPhase("leave")}
      className={`fixed inset-0 z-50 grid place-items-center bg-bg transition-opacity ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="w-[min(92vw,28rem)] rounded-card border border-border bg-surface p-6 font-mono text-xs sm:text-sm">
        <p className="text-muted">$ open {user}</p>

        <ul className="mt-4 space-y-2">
          {profile.snapshot.map((row, index) => (
            <li
              key={row.label}
              className="animate-fade-up"
              style={{ animationDelay: `${250 + index * 350}ms` }}
            >
              <span className="text-accent">✓</span> {row.label}:{" "}
              <span className="text-muted">{row.value}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 h-0.5 overflow-hidden rounded-full bg-border">
          <div
            className="h-full origin-left animate-boot-bar bg-linear-to-r from-primary via-accent to-violet"
            style={{ animationDuration: `${SHOW_MS}ms` }}
          />
        </div>

        <p className="mt-4 text-center text-muted">Click anywhere to skip</p>
      </div>
    </div>
  );
}
