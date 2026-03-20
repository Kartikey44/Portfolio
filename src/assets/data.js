import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwindcss from '../assets/tailwindcss.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongo.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import vercel from '../assets/vercel.png'
import postman from '../assets/postman.png'
import linkedinprofile from '../assets/linkedinProfile.jpeg'
import Leetcode from '../assets/Leetcode.jpeg'
import GeeksForGeeks from '../assets/GeeksForGeeks.png'
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const socialLinks = [
  {
    icon: LuGithub,
    url: "https://github.com/Kartikey44",
  },
  {
    icon: FaLinkedinIn,
    url: "https://linkedin.com/Kartikey444",
  },
  {
    icon: MdOutlineMail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=saraswatkartikey842@gmail.com",
  },
];
export const profile = 
  {
    name: 'Kartikey Saraswat',
    role: 'MERN Stack Development',
    location: 'Greater Noida, Uttar Pradesh, India',
    email: 'saraswatkartikey842@gmail.com',
    phone: '+91-8307318486',
    links: [
    { label: 'GitHub', url: 'https://github.com/Kartikey44' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/Kartikey444/' },
  ],
  profileImage: linkedinprofile,
  summary: 'I’m a passionate developer with a focus on frontend development and a growing interest in data science.I build responsive web applications using modern technologies and enjoy solving real-world problems.'
}
 export const frontend = [
  { name: "HTML5", img: html },
  { name: "CSS3", img: css },
  { name: "JavaScript", img: javascript },
  { name: "React", img: react },
  {name:"Tailwind Css" ,img:tailwindcss}
]
export const backend = [
  { name: "Node", img: node },
  { name: "Express", img: express },
  { name: "MongoDB", img: mongodb },
]
export const tools = [
  { name: "Git", img: git },
  { name: "Github", img:github },
  { name: "Postman", img: postman },
  { name: "Vercel", img: vercel },
]
export const education = [
  {
    degree: "B.Tech in Aartificial Intelligence & Data Science",
    college: "Galgotias College of Engineering & Technology",
    year: "2023 - 2027",
    location: "Greater Noida",
    score: "7.5 CGPA",
  },
  {
    degree: "Class 12 (HBSE)",
    college: "Jeevan Jyoti Sr. Sec. School",
    year: "2022",
    location: "Palwal",
    score: "93.2%",
  },
  {
    degree: "Class 10 (HBSE)",
    college: "Saraswati Sr. Sec. School",
    year: "2020",
    location: "Palwal",
    score: "90.8%",
  }
]
export const coding = [
  {
    name: 'Leetcode',
    img: Leetcode,
    links: [
      { label: 'Leetcode', url: 'https://leetcode.com/u/kartikey44/' },
    ]
  },
   {
    name: 'GeeksForGeeks',
    img: GeeksForGeeks,
    links: [
    { label: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/profile/kartikey444' }
    ]
  }
]