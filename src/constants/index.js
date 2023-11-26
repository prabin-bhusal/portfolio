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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "API Developer",
    icon: mobile,
  },
  {
    title: "IT Support",
    icon: backend,
  },
  {
    title: "SEO Expertise",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Redux Toolkit",
    icon: redux,
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
    title: "SEO Expertise",
    company_name: "Rove The Trails | rovethetrails.com",
    icon: rovethetrails,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Figure out the competitors in similar niche.",
      "Personal blogging project. Ranked many keywords in first place of search engine even for competitive keywords such as 'cycle price in nepal'.",
      "Implementing SEO audits in regular weeks and reporting it.",
      "Writing SEO best practise content to make higher ranking in search engine.",
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
  {
    name: "Rove The Trails",
    description:
      "This is cyclind and trekking blog website based for Nepali commuunities. This website is build with Wordpress and Elementor. All the best practises of SEO are implemented in this website.",
    tags: [
      {
        name: "wordpress",
        color: "pink-text-gradient",
      },
      {
        name: "SEO",
        color: "green-text-gradient",
      },
    ],
    image: rove,
    source_code_link: "https://rovethetrails.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
