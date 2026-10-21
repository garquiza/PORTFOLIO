import { ArrowUp } from 'lucide-react'
import { profile } from '../../content/profile'
import { SocialLinks } from '../ui/SocialLinks'
import { NavLinks } from './NavLinks'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <nav aria-label="Footer">
            <NavLinks className="flex flex-wrap gap-x-6 gap-y-2" />
          </nav>
          <SocialLinks />
        </div>
        <div className="flex items-center justify-between text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#top" className="inline-flex items-center gap-1 transition hover:text-accent">
            <ArrowUp className="size-4" aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
