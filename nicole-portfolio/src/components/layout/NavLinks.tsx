import { navItems } from '../../content/navigation'

type NavLinksProps = { className?: string; onNavigate?: () => void }

export function NavLinks({ className = '', onNavigate }: NavLinksProps) {
  return (
    <ul className={className}>
      {navItems.map((item) => (
        <li key={item.href}>
          <a href={item.href} onClick={onNavigate} className="text-sm text-muted transition hover:text-fg">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
