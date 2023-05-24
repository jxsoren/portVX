export interface Project {
  name: string;
  about: string;
  technologies: string;
  thumbnail: string;
  links: { live: string; github: string };
}

export const skillDB: Project[] = [];
