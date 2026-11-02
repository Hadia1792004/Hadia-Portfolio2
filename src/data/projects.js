// Images are in public/images/projects and use a 16:9 ratio, such as 1280x720.
// These are illustrations of each project's concept, not screenshots, and their alt text
// says so. When adding a real screenshot, describe it as one in the alt text.
// Buttons only appear for links that are filled in, so leave unknown links empty.
export const projects = [
  {
    slug: 'silent-voice',
    title: 'Silent Voice',
    description:
      'An AI-based wearable glove for sign language translation, built with five flex sensors, an MPU6050 motion sensor, an Arduino Nano, and a Bluetooth HC-05 module. An Android application presents the translation as text and speech.',
    tags: [
      'Artificial Intelligence',
      'Flex Sensors',
      'MPU6050',
      'Arduino Nano',
      'Bluetooth HC-05',
      'Android',
    ],
    image: {
      src: '/images/projects/silent-voice.svg',
      alt: 'Illustration of a smart glove with a flex sensor on each finger and an Arduino Nano on the back of the hand, connected wirelessly to a phone showing text and a speaker icon.',
    },
    githubUrl: 'https://github.com/Hadia1792004/Silent-Voice-FYP2',
    liveUrl: '',
  },
  {
    slug: 'techhub-store',
    title: 'TechHub Store',
    description:
      'A full-stack e-commerce application with a Node.js and Express.js backend, MongoDB for data storage, and server-rendered pages built with EJS.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
    image: {
      src: '/images/projects/techhub-store.svg',
      alt: 'Illustration of an online technology store page, with a promotional banner, a shopping cart, and product cards for a laptop, phone, headphones, and smartwatch.',
    },
    githubUrl: 'https://github.com/Hadia1792004/TechHub_Store',
    liveUrl: '',
  },
  {
    slug: 'student-rest-api',
    title: 'Student REST API',
    description:
      'A backend project demonstrating REST API development and the management of student data.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API'],
    image: {
      src: '/images/projects/student-rest-api.svg',
      alt: 'Illustration of REST API routes and code beside a student management dashboard, connected to a server and a database.',
    },
    githubUrl: 'https://github.com/Hadia1792004/StudentAPI-Database',
    liveUrl: '',
  },
  {
    slug: 'banking-website',
    title: 'Banking Website',
    description:
      'A web development project demonstrating banking-related website interfaces.',
    tags: ['Web Development'],
    image: {
      src: '/images/projects/banking-website.svg',
      alt: 'Illustration of an online banking dashboard, with a bank card, charts, a list of transactions, and a security shield.',
    },
    githubUrl: '',
    liveUrl: '',
  },
  {
    slug: 'attendance-management-system',
    title: 'Attendance Management System',
    description: 'An academic project for managing attendance records.',
    tags: ['Academic Project'],
    image: {
      src: '/images/projects/attendance-management-system.svg',
      alt: 'Illustration of an attendance tracking dashboard, with a calendar of marked days, a progress ring, and a list of people with check marks.',
    },
    githubUrl: '',
    liveUrl: '',
  },
]
