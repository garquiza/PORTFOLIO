// import { ArrowUpRight } from 'lucide-react'
// import { EmptyState } from '../../components/ui/EmptyState'
// import { Section } from '../../components/ui/Section'
// import { achievements } from '../../content/achievements'
// import { externalLinkProps } from '../../lib/links'

// export function Achievements() {
//   return (
//     <Section id="achievements" title="Achievements and certificates">
//       {achievements.length === 0 ? (
//         <EmptyState message="Achievements and certificates will be added here." />
//       ) : (
//         <ul className="divide-y divide-border/60 border-y border-border/60">
//           {achievements.map((item) => (
//             <li key={item.title} className="py-5">
//               <h3 className="font-display text-lg font-medium">{item.title}</h3>
//               {(item.issuer || item.date) && (
//                 <p className="mt-1 text-sm text-muted">{[item.issuer, item.date].filter(Boolean).join(', ')}</p>
//               )}
//               {item.description && <p className="mt-2 max-w-prose text-muted">{item.description}</p>}
//               {item.url && (
//                 <a
//                   href={item.url}
//                   {...externalLinkProps}
//                   className="mt-2 inline-flex items-center gap-1 text-sm text-accent hover:underline"
//                 >
//                   View credential
//                   <ArrowUpRight className="size-4" aria-hidden="true" />
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </Section>
//   )
// }
