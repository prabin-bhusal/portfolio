import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  rovethetrails,
  gate,
  ag,
  rove,
  tai,
  motormandu,
  image,
  php,
  mysql,
  postgres,
  laravel,
  livewire
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "API Developer",
    icon: mobile,
  },
  {
    title: "Laravel Developer",
    icon: backend,
  },
  {
    title: "SEO Expertise",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Php",
    icon: php,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Livewire",
    icon: livewire,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgresSQL",
    icon: postgres,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "SEO Specialist",
    company_name: "Motor Mandu | motormandu.com",
    icon: motormandu,
    iconBg: "#E6DEDD",
    date: "Sept 2025 - Present",
    points: [
      "Conducting competitor analysis to identify SEO opportunities and content gaps.",
      "Managing a personal blogging project that ranks multiple competitive keywords, including 'cycle price in Nepal', in top search positions.",
      "Performing regular SEO audits and preparing actionable reports for continuous improvement.",
      "Creating SEO-optimized content following best practices to increase search visibility and organic traffic.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "TAI Inc.",
    icon: tai,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining scalable backend services with a focus on clean architecture and optimal performance.",
      "Collaborating with cross-functional teams to design, implement, and improve application features.",
      "Writing efficient, maintainable code and participating in code reviews to ensure product quality.",
      "Integrating APIs, optimizing databases, and improving system reliability through continuous monitoring.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Motor Mandu",
    description:
      "Motor Mandu is an automotive news and review website built for the Nepali community. The site is developed using Laravel and Blade, with proper SEO best practices implemented.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "Blade",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "sky-text-gradient",
      },
      {
        name: "SEO",
        color: "green-text-gradient",
      },
    ],
    image: image,
    source_code_link: "https://motormandu.com/",
  },
  {
    name: "GATE",
    description:
      "GATE, a tutor finding website, was my first full stack website build with MERN stack in my college time. Students can book a tutor and tutor also can register accordingly. Admin was powered to check qualification of tutor.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: gate,
    source_code_link: "https://github.com/bhusalprabin/GATE",
  },
  {
    name: "AG Calculator",
    description:
      "This is Nepal based agriculture calculator to calculate all about land and plant related in Nepali metrics/units. This is a site made with React JS and bootstrap. The data are fetched with help of json file not with backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: ag,
    source_code_link: "https://kisankosathi.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
