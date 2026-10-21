import { Chip } from '../../components/ui/Chip'
import { EmptyState } from '../../components/ui/EmptyState'
import { Section } from '../../components/ui/Section'
import { skillGroups } from '../../content/skills'

export function Skills() {
  const groups = skillGroups.filter((group) => group.items.length > 0)

  return (
    <Section id="skills" title="Skills">
      {groups.length === 0 ? (
        <EmptyState message="Skills will be listed here." />
      ) : (
        <div className="divide-y divide-border/60 border-y border-border/60">
          {groups.map((group) => (
            <div key={group.title} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr]">
              <h3 className="font-display text-lg font-medium">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
