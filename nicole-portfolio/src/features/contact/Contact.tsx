import { ArrowUpRight } from 'lucide-react'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { EmptyState } from '../../components/ui/EmptyState'
import { Section } from '../../components/ui/Section'
import { visibleSocialLinks } from '../../content/social'
import { externalLinkProps } from '../../lib/links'

export function Contact() {
  return (
    <Section
      id="contact"
      title="Let’s talk"
      description="The quickest way to reach me is through social media. Send me a message on any of these."
    >
      {visibleSocialLinks.length === 0 ? (
        <EmptyState message="Social links will be added here." />
      ) : (
        <ul className="flex flex-wrap gap-3">
          {visibleSocialLinks.map((link) => (
            <li key={link.platform}>
              <ButtonLink href={link.url} variant="secondary" {...externalLinkProps}>
                {link.label}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
