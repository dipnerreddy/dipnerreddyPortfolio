import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working to build a community of Developers",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "RHS School Website",
    des: "freelance website using Taildwind.css and Next.js",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.radianthighschool.in",
  },
  {
    id: 2,
    title: "Studio 99",
    des: "freelance website and also one of my early projects while leanring web dev",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://nehasrivalli.github.io/studio_99/",
  },
  {
    id: 3,
    title: "RHS School Website",
    des: "freelance website using Taildwind.css and Next.js",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.radianthighschool.in",
  },
  {
    id: 4,
    title: "Studio 99",
    des: "freelance website and also one of my early projects while leanring web dev",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://nehasrivalli.github.io/studio_99/",
  },
];

export const testimonials = [
  {
    quote:
      "Dipner is good at problem solving with lots of commitment and detail oriented. He has good programming aptitude and 'Get Things Done' attitude with the combination of both smart and hard working nature. My interaction with Dipner is during his project work where, with minimal guidance he completed full stack development in a stipulated time period. I wish him great success ahead.",
    name: "VenkataRajesh Gorrepati",
    title: "VenkataRajesh was AVUTHU DIPNER's teacher", // &apos;
    img: "/app.svg",
  },
  {
    quote:
      "Dipner was a responsible student in NUS GAIP program.He is committed to the program and finds ways to learn as much as possible from everything and everyone around him. He is proficient in the domains of Al ML and AWS",
    name: "Ajay Marar",
    title: "Ajay was AVUTHU DIPNER's mentor at NUS",
    img: "/app.svg",
  },
  {
    quote:
      "I had the pleasure of working with A.Dipner Reddy on Java and I highly recommend him. Dipner Reddy is an exceptional professional who consistently delivers high-quality work. He had a strong attention to detail and a deep understanding of Java,Figma and Springboot. He had collaborative nature and excellent communication skills and make them a valuable asset to any team. Dipner consistently goes above and beyond to meet deadlines and exceed expectations.",
    name: "Sowmith Sajja",
    title:
      "Sowmith worked with AVUTHU DIPNER on the same team at Sefe Home Automations as Java developer",
    img: "/app.svg",
  },
  {
    quote:
      "During our time working together, I had the opportunity to observe Dipner's work ethic and technical skills. Dipner is a highly skilled Java developer with an exceptional understanding of the programming language. He has a keen eye for detail and is always willing to go the extra mile to ensure that the project is completed to the highest standards. Dipner is an excellent team player and has a great ability to work collaboratively with his colleagues.",
    name: "Raghu Sai",
    title:
      "Raghusai worked with AVUTHU DIPNER on the same team at Sefe Home Automations as Java developer",
    img: "/app.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "NUS",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "CG pvt ltd",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Sefe pvt ltd",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Spring Boot Dev Intern",
    desc: "Assisted in the development of api's for embeded bords to communate with the mobile application using Java Spring Boot, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Dev Project",
    desc: "Designed and developed static website for Radiant High School using Next.js ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Research Intern @ NUS",
    desc: "Worked on AI/Ml models at National University of Singapore as a Summer Research Intern",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software developer",
    desc: "Developed and maintained user-interacting api's for many projects.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/dipnerreddy",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/avuthu-dipner-reddy/",
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://www.instagram.com/dipnerreddy.d_r/",
  },
];

export const resume = {
  link: "/resume.pdf",
};
