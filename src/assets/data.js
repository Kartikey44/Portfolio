import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwindcss from '../assets/tailwindcss.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import setting from '../assets/setting.png'
import ui from '../assets/ui.png'
import web from '../assets/web.png'
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
import { MdDescription, MdOutlineMail } from "react-icons/md";

export const work = [
  {
    name: "Web Development",
    img:web,
    Description:"I like building simple and functional web apps using the MERN stack."
  },
  {
    name: "UI Development",
    img:ui,
    Description:"I enjoy creating clean and responsive interfaces with React and Tailwind."
  },
  {
    name: "Backend & APIs",
    img: setting,
    Description:"Learning how to build servers and APIs with Node and Express."
  }
]
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
  tagline: "Building scalable SaaS applications with the MERN stack, combining clean design with efficient functionality.",
  summary: 'I am a student developer with a strong interest in building modern web applications using the MERN stack. My focus lies in understanding how real-world applications are structured, from intuitive user interfaces to efficient backend systems.\n\nMost of my time is spent developing projects, exploring new technologies, and improving my problem-solving skills through practical implementation. I aim to write clean, maintainable code while continuously refining both design and functionality.\n\nWith a growing interest in full-stack development, the goal is to build scalable and user-focused SaaS applications that solve real problems. Consistent learning, experimentation, and hands-on development remain the core of my approach.'
}

 export const frontend = [
  { name: "HTML5", img: html },
  { name: "CSS3", img: css },
  { name: "JavaScript", img: javascript },
  { name: "React", img: react },
  { name:"Tailwind Css" ,img:tailwindcss}
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
export const nav =[
{ 
    id: "#about",
    label:"About"
},
{ 
    id: "#skills",
    label:"Skills"
},
{ 
    id: "#services",
    label:"Services"
},
{ 
    id: "project",
    label:"Projects"
},
{ 
    id: "#contact",
    label:"Contact"
},
]