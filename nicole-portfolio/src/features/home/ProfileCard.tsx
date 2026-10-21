import { Avatar } from '../../components/ui/Avatar'
import { profile } from '../../content/profile'

export function ProfileCard() {
  return (
    <aside
      aria-label="Profile snapshot"
      className="rounded-card border border-border bg-surface/60 p-6 backdrop-blur"
    >
      <div className="flex items-center gap-4">
        <Avatar name={profile.name} imageUrl={profile.imageUrl} className="size-16 shrink-0" />
        <p className="font-mono text-sm text-muted">about-me.ts</p>
      </div>

      <dl className="mt-6 space-y-3 font-mono text-sm">
        {profile.snapshot.map((row, index) => (
          <div
            key={row.label}
            className="animate-fade-up grid grid-cols-[6rem_1fr] gap-3"
            style={{ animationDelay: `${150 + index * 90}ms` }}
          >
            <dt className="text-accent">{row.label}</dt>
            <dd className="text-fg">{row.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
