import { Chip } from "../../components/ui/Chip";
import { Section } from "../../components/ui/Section";
import { profile } from "../../content/profile";

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-justify text-pretty leading-relaxed text-muted">
          {" "}
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h3 className="font-display text-lg font-medium">
            Away from the keyboard
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <li key={interest}>
                <Chip>{interest}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
