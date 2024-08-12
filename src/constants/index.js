import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.avif";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.webp";

import coding from "../assets/hobbies/coding.jpg";
import weightlifting from "../assets/hobbies/weightlifting.jpg";
import gaming from "../assets/hobbies/league.jpg";
import hiking from "../assets/hobbies/hiking.webp";

export const HERO_CONTENT = `I am a recent Artificial Intelligence graduate from the University of Manchester, with a strong passion for artificial intelligence and machine learning. I am actively seeking roles where I can apply my expertise, particularly in software engineering, data engineering, and data analyst positions. Throughout my time at university, I have honed my skills in various technologies and programming languages, with a strong proficiency in Python, Java, and SQL. My goal is to contribute to innovative projects that leverage AI and ML to solve real-world problems and drive technological advancement.`;

export const ABOUT_TEXT = `I am a recent graduate from the University of Manchester with a strong interest in technology and software development. I'm very eager to start working in the industry to continue learning more industry-focused knowledge while applying what I’ve learned during university.`;

export const HOBBIES = [
  {
    title: "Hiking",
    image: hiking,
    description:
      "I enjoy hiking with friends or family, exploring the Peak District. It’s a wonderful way to test my endurance while disconnecting from technology.",
  },
  {
    title: "Weightlifting",
    image: weightlifting,
    description:
      "I recently started weightlifting and have made it a regular part of my routine. It’s been a great way to challenge myself, build strength, and stay focused.",
  },
  {
    title: "Coding",
    image: coding,
    description:
      "I started coding just before university when I decided to pursue a degree in AI. My love for problem-solving, combined with a strong background in mathematics, drew me to programming, and I’ve been passionate about it ever since.",
  },
  {
    title: "Gaming",
    image: gaming,
    description:
      "I love playing computer games of all genres, especially as a way to relax and have fun with friends.",
  },
];

export const EXPERIENCES = [];

export const PROJECTS = [
  {
    title: "Minecraft GPT Mod",
    image: project1,
    description:
      "A Minecraft mod integrating GPT models to create an AI assistant that enhances gameplay by providing real-time information, suggestions, and insights.",
    technologies: ["Java", "OpenAI API"],
    githubLink: "https://github.com/alim-zaib/minecraft_gpt_assistant_mod",
  },
  {
    title: "Fungi",
    image: project2,
    description:
      "A terminal-based version of the classic board game Fungi, developed using Java and tested with JUnit.",
    technologies: ["Java", "JUnit"],
    githubLink: "https://github.com/alim-zaib/fungi",
  },
  {
    title: "Hex Game AI Bot",
    image: project3,
    description:
      "An AI agent for the Hex board game, using Minimax with alpha-beta pruning and Dijkstra-based heuristics for strategic move selection and performance optimisation.",
    technologies: ["Python"],
    githubLink: "https://github.com/alim-zaib/hex_agent",
  },
  {
    title: "Spam Detector",
    image: project4,
    description:
      "A Naive Bayes spam detector that reads, cleans, and classifies text messages.",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib"],
    githubLink: "https://github.com/alim-zaib/spam_detector",
  },
];

export const CONTACT = {};
