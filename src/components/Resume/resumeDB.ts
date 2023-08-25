import { As } from "@chakra-ui/react";

export interface JobRecipe {
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
  technologies?: { name: string; icon: As; color: string }[];
  projects?: {
    name: string;
    description: string;
    technologies: { name: string; icon: As; color: string }[];
    links: { name: string; link: string; color: string; icon: As }[];
  }[];
}

export const jobDB: JobRecipe[] = [
  {
    company: "Filevine",
    role: "Technical Support Engineer I & II",
    location: "Salt Lake City, UT",
    duration: "Oct 2022 - Present",
    responsibilities: [
      "Diagnosed and troubleshooted product defects using Developer Tools, AWS Cloud Watch, AWS Athena, and SQL.",
      "Managed REST API inquiries with Postman and API testing tools.",
      "Collaborated with product and engineering teams to address product defects.",
      "Built and troubleshot client automations in Zapier and Workato.",
    ],
  },
  {
    company: "Impartner",
    role: "Technical Support Developer",
    location: "Salt Lake City, UT",
    duration: "Aug 2021 - Sep 2022",
    responsibilities: [
      "Utilized HTML, CSS, JS, C# and the .Net framework to develop frontend components.",
      "Applied developer tools in a Scrum environment to locate and fix issues in customer portals.",
      "Addressed technical support requests efficiently.",
    ],
  },
  {
    company: "V School",
    role: "Teaching Assistant",
    location: "Remote",
    duration: "May 2021 - Aug 2021",
    responsibilities: [
      "Orchestrated daily stand-up meetings with students in an Agile environment.",
      "Delivered technical assistance to students.",
      "Worked with program directors to track and report student progress.",
    ],
  },
];

export const educationDB = [
  {
    institution: "V School Coding Bootcamp",
    location: "Remote",
    year: "2021",
    description:
      "Learned industry best practices and practical Front End and Back End (Full Stack) software development standards with a focus on HTML5, CSS3, JavaScript, Node.JS, React, REST APIs, and MongoDB. Created and deployed mobile-first applications while learning new languages and frameworks by collaborating every week with a senior web developer.",
  },
];
