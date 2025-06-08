import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.avif";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.webp";

import coding from "../assets/hobbies/coding.jpg";
import weightlifting from "../assets/hobbies/weightlifting.jpg";
import gaming from "../assets/hobbies/MarioKart8Boxart.jpg";
import hiking from "../assets/hobbies/hiking.webp";

export const HERO_CONTENT = `i'm a recent computer science graduate (with a focus in ai), currently working as a software developer. i’m passionate about ai and its future impact, and i’m eager to build software that makes a real difference. with a strong foundation in software engineering and a commitment to continuous learning, i’m excited to join a team where i can grow professionally, contribute to innovative projects, and help drive technological advancement.`;

export const ABOUT_TEXT = `i have a deep appreciation for mathematics as the foundation of algorithms, i’m obsessed with efficiency and automation and love finding ways to streamline workflows and save time. i’m personally interested in learning more about artificial intelligence and machine learning and exploring how they intersect in real-world applications.`;

export const HOBBIES = [
  {
    title: "hiking",
    image: hiking,
    description:
      "i enjoy hiking with friends, exploring the peak district. it’s a great way to challenge my endurance while taking a break from technology.",
  },
  {
    title: "weightlifting",
    image: weightlifting,
    description:
      "i recently started weightlifting and have made it a regular part of my routine. it’s been a great way to challenge myself, build strength, and stay focused.",
  },
  {
    title: "coding",
    image: coding,
    description:
      "i started coding just before university when i decided to pursue a degree in ai. my love for problem-solving, combined with a strong background in mathematics, drew me to programming, and i’ve been passionate about it ever since.",
  },
  {
    title: "gaming",
    image: gaming,
    description:
      "i enjoy a range of computer games across different genres for the problem-solving and strategic thinking they involve.",
  },
];

export const EXPERIENCES = [];

export const PROJECTS = [
  {
    title: "minecraft gpt mod",
    image: project1,
    description:
      "a minecraft mod integrating gpt models to create an ai assistant that enhances gameplay by providing real-time information, suggestions, and insights.",
    technologies: ["java", "openai api"],
    githubLink: "https://github.com/alim-zaib/minecraft_gpt_assistant_mod",
  },
  {
    title: "fungi",
    image: project2,
    description:
      "a terminal-based version of the classic board game fungi, developed using java and tested with junit.",
    technologies: ["java", "junit"],
    githubLink: "https://github.com/alim-zaib/fungi",
  },
  {
    title: "hex game ai bot",
    image: project3,
    description:
      "an ai agent for the hex board game, using minimax with alpha-beta pruning and dijkstra-based heuristics for strategic move selection and performance optimisation.",
    technologies: ["python"],
    githubLink: "https://github.com/alim-zaib/hex_agent",
  },
  {
    title: "spam detector",
    image: project4,
    description:
      "a naive bayes spam detector that classifies text messages as either spam or ham (non-spam).",
    technologies: ["python", "pandas", "numpy", "matplotlib"],
    githubLink: "https://github.com/alim-zaib/spam_detector",
  },
];

export const CONTACT = {};
