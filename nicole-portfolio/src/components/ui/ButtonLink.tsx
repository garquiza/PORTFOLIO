import type { ComponentProps } from 'react'

const VARIANTS = {
  primary: 'bg-primary text-white hover:brightness-110',
  secondary: 'border border-border bg-surface text-fg hover:border-accent hover:text-accent',
} as const

type ButtonLinkProps = ComponentProps<'a'> & { variant?: keyof typeof VARIANTS }

export function ButtonLink({ variant = 'primary', className = '', ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-control px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  )
}
