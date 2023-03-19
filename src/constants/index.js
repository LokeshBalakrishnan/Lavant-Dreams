import { FrontSide } from "three";
import {
  mobile,
  backend,
  creator,
  web,

  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,

  amd,
  intel,
  nvidia,
  ryzen,
  valorant,
  warzone,
  fortnite,
  pubg,
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
    title: "System Developer",
    icon: web,
  },
  {
    title: "Esports Player",
    icon: mobile,
  },
  {
    title: "Game Tester",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Team 1",
    icon: t1,
  },
  {
    name: "Team 2",
    icon: t2,
  },
  {
    name: "Team 3",
    icon: t3,
  },
  {
    name: "Team 4",
    icon: t4,
  },
  {
    name: "Team 5",
    icon: t5,
  },
  {
    name: "Team 6",
    icon: t6,
  },
  {
    name: "Team 7",
    icon: t7,
  },
  {
    name: "Team 8",
    icon: t8,
  },
  {
    name: "Team 9",
    icon: t9,
  },
  {
    name: "Team 10",
    icon: t10,
  },
  {
    name: "Team 11",
    icon: t11,
  },
  {
    name: "Team 12",
    icon: t12,
  },
];

const experiences = [
  {
    title: "Cross Platform Developer",
    company_name: "AMD",
    icon: amd,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "As an Esports team manager you will need to develop training plans for individual players and the team as a whole.",
      "You will have to identify people’s strengths and areas to improve,",
      "give them 'drills' to perfect specific moves and co-ordinate teams to work on specific plays. ",
    ],
  },
  {
    title: "Esports Manager",
    company_name: "Intel",
    icon: intel,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "As your team progresses, they will need to receive their monthly salary as well as any winnings.",
      "You’ll need a system to pay them by direct debit and keep records.",
      "Participating in reviews and providing constructive feedback to other players.",
    ],
  },
  {
    title: "System Developer",
    company_name: "Ryzen",
    icon: ryzen,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Your team is ultimately a kind of business, so you will need to set up a business bank account.",
      "this has the added benefit of including your team’s title as the named owner, which looks professional to suppliers.",
      "As you enter more competitions and your team’s income rises, you’re going to benefit from using accounting software -",
      "or outsourcing this task to professional accountants.",
    ],
  },
  {
    title: "Visual Designer",
    company_name: "Nvidia",
    icon: nvidia,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "As an Esports team manager you will need to develop training plans for individual players and the team as a whole.",
      "You will have to identify people’s strengths and areas to improve,",
      "give them 'drills' to perfect specific moves and co-ordinate teams to work on specific plays. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "This is something which I've always looking for while picking up the pc parts. Thank you developer.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a System developer who truly cares about their clients' success like lokesh does.",
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
    name: "Valorant",
    description:
      "Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures   around the world.",
    tags: [
      {
        name: "Esports",
        color: "blue-text-gradient",
      },
      {
        name: "personal",
        color: "green-text-gradient",
      },
      {
        name: "Tester",
        color: "pink-text-gradient",
      },
    ],
    image: valorant,
    source_code_link: "#",
  },
  {
    name: "Call of Duty",
    description:
      "Unlike the battle royale gameplay in Warzone, players who sprint through an open battlefield in Modern Warfare are likely to be killed on sight. Therefore, new players should use the main campaign.",
    tags: [
      {
        name: "Esports",
        color: "blue-text-gradient",
      },
      {
        name: "personal",
        color: "green-text-gradient",
      },
      {
        name: "Tester",
        color: "pink-text-gradient",
      },
    ],
    image: warzone,
    source_code_link: "#",
  },
  {
    name: "Fortnite",
    description:
      "Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing.",
    tags: [
      {
        name: "Esports",
        color: "blue-text-gradient",
      },
      {
        name: "Gameplay",
        color: "green-text-gradient",
      },
      {
        name: "Tester",
        color: "pink-text-gradient",
      },
    ],
    image: fortnite,
    source_code_link: "#",
  },
  {
    name: "PUBG",
    description:
      "Multiple things made PUBG popular in the country — it's easy to stream, you can voice chat with friends while you play, and the game is designed to get the adrenaline pumping and give you a rush.",
    tags: [
      {
        name: "Esports",
        color: "blue-text-gradient",
      },
      {
        name: "Gameplay",
        color: "green-text-gradient",
      },
      {
        name: "Tester",
        color: "pink-text-gradient",
      },
    ],
    image: pubg,
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };