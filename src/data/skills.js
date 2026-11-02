import { Code2, Database, Monitor, Server, Wrench } from 'lucide-react'
import {
  SiCss,
  SiEjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

// `color` is the brand colour. Leave it out for black logos so they follow the theme.
// JavaScript, React, and EJS use deeper shades because their pale brand colours
// are too faint on a light background.
const javascript = {
  name: 'JavaScript',
  icon: SiJavascript,
  color: '#c0ab1c',
}

export const skillGroups = [
  {
    title: 'Frontend',
    icon: Monitor,
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, color: '#1572b6' },
      javascript,
      { name: 'React.js', icon: SiReact, color: '#54b5d1' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
      { name: 'Express.js', icon: SiExpress },
      { name: 'EJS', icon: SiEjs, color: '#96a858' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [{ name: 'MongoDB', icon: SiMongodb, color: '#47a248' }],
  },
  {
    title: 'Programming',
    icon: Code2,
    skills: [{ name: 'Python', icon: SiPython, color: '#3776ab' }, javascript],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: VscVscode, color: '#007acc' },
    ],
  },
]
