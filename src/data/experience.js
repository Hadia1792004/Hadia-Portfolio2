import { Code2, GraduationCap, Landmark } from 'lucide-react'

export const experienceTypes = {
  placement: { label: 'Practical Placement', icon: Landmark },
  internship: { label: 'Internship', icon: Code2 },
  training: { label: 'Web Development Training', icon: GraduationCap },
}

// Most recent first.
export const experience = [
  {
    title: 'Skillify',
    type: 'training',
    period: 'October 2026 onwards',
  },
  {
    title: 'Soneri Bank Limited',
    type: 'placement',
    subtitle: 'Six-week placement',
    period: 'September–October 2026',
    description:
      'Gained exposure to banking operations and the procedures that support them.',
    tags: [
      'Banking Operations',
      'T24',
      'Account Opening Procedures',
      'CIF',
      'E-KYC',
      'Documentation Processes',
    ],
  },
  {
    title: 'CodeAlpha',
    type: 'internship',
    subtitle: 'Web Development',
    period: 'July–August 2026',
  },
  {
    title: 'DecodeLabs',
    type: 'internship',
    subtitle: 'Web Development',
    period: 'July–August 2026',
  },
]
