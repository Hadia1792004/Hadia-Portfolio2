import { Mail } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'

// Personal details used across the site.
export const site = {
  name: 'Hadia Hassan',
  role: 'Aspiring Full Stack Web Developer',
  degree: 'BS Computer Engineering Technology',
  university: 'International Islamic University Islamabad (IIUI)',
  intro:
    'I am a BS Computer Engineering Technology student at International Islamic University Islamabad (IIUI), developing my skills across the frontend and backend of the web.',
  passion:
    'I am passionate about building web applications and using technology to solve real-world problems.',
  // A square image works best. To change it, add a file to public/images and update src and alt.
  heroImage: {
    src: '/images/engineering-workspace.svg',
    alt: 'Illustration of a modern engineering workspace, with a laptop showing code, an Arduino board, a breadboard with LEDs and jumper wires, and microcontroller chips.',
  },
  interests: [
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
    'Artificial Intelligence and Machine Learning',
    'Embedded Systems',
  ],
  email: 'hadiahassan942@gmail.com',
  github: 'https://github.com/Hadia1792004',
  linkedin: 'https://www.linkedin.com/in/hadia-hassan1',
}

export const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
]

const newTab = { target: '_blank', rel: 'noreferrer' }

export const contactMethods = [
  {
    label: 'Email',
    value: site.email,
    icon: Mail,
    link: { href: `mailto:${site.email}` },
  },
  {
    label: 'GitHub',
    value: 'github.com/Hadia1792004',
    icon: SiGithub,
    link: { href: site.github, ...newTab },
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/hadia-hassan1',
    icon: FaLinkedin,
    link: { href: site.linkedin, ...newTab },
  },
]
