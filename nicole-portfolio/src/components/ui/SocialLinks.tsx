import { ArrowUpRight } from 'lucide-react'
import { visibleSocialLinks } from '../../content/social'
import { externalLinkProps } from '../../lib/links'

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-4 ${className}`}>
      {visibleSocialLinks.map((link) => (
        <li key={link.platform}>
          <a
            href={link.url}
            {...externalLinkProps}
            className="inline-flex items-center gap-1 text-sm text-muted transition hover:text-accent"
          >
            {link.label}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
