export function EmptyState({ message }: { message: string }) {
  return (
    <p className="rounded-card border border-dashed border-border px-6 py-10 text-center text-muted">
      {message}
    </p>
  )
}
