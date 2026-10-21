import { ButtonLink } from "../../components/ui/ButtonLink";
import { SocialLinks } from "../../components/ui/SocialLinks";
import { profile } from "../../content/profile";
import { ProfileCard } from "./ProfileCard";
// import { TypedText } from "./TypedText";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgb(47_107_255/0.2),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="text-muted">Hi, I’m</p>
          <h1 className="mt-1 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-prose text-xl text-fg/80">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-prose text-justify text-pretty text-muted">
            {profile.intro}
          </p>
          {/* <p className="mt-3 h-7 text-lg">
            <span className="text-muted">Off the clock: </span>
            <span className="text-accent">
              <TypedText words={profile.interests} />
            </span>
          </p> */}
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects">See my projects</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Find me online
            </ButtonLink>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <ProfileCard />
      </div>
    </section>
  );
}
