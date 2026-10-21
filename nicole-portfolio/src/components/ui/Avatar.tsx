type AvatarProps = { name: string; imageUrl?: string; className?: string };

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export function Avatar({ name, imageUrl, className = "" }: AvatarProps) {
  return (
    <div className={`relative rounded-full ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 animate-ring-spin rounded-full bg-[conic-gradient(var(--color-primary),var(--color-accent),var(--color-violet),var(--color-primary))]"
      />
      <div className="absolute inset-0.5 grid place-items-center overflow-hidden rounded-full bg-surface">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Portrait of ${name}`}
            className="size-full object-cover"
          />
        ) : (
          <span aria-hidden="true" className="font-display text-xl text-muted">
            {initials(name)}
          </span>
        )}
      </div>
    </div>
  );
}
