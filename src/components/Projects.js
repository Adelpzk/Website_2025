import React from "react";
import "../styles/Projects.css";
import uwscoop from "../assets/uwscoop.png";
import findwork from "../assets/findwork.png";
import reddit from "../assets/reddit.png";
import SE from "../assets/SE.png";
import Distributed from "../assets/distributed.png";

const projects = [
  {
    image: uwscoop, // Replace with the actual image path
    title: "uwScoop",
    subtitle: "JavaScript, React, NodeJS, MySQL, Jest, Cypress, Trello",
    link: "https://github.com/Adelpzk/uwScoop",
    description:
      "Developed uwScoop, an automated ride-matching platform. Enabled users to post or request rides, utilizing smart matching algorithms, as well as requesting, inviting, messaging and notifications, allowing users to accept requests.",
  },
  {
    image: findwork,
    title: "WaterlooWorks FindWork",
    subtitle: "TypeScript, JavaScript, Next.js, Firebase",
    link: "https://github.com/Adelpzk/ww-findwork?tab=readme-ov-file",
    description:
      "Developed an IDSS to streamline job search by ranking postings based on user preferences and resume similarity. \n Integrated real-time job data scraping Chrome extension and customizable ranking model, reducing student search time.",
  },
  {
    image: reddit,
    title: "Reddit Newsletter",
    subtitle: "Golang, Python, Next.js, Redux, Redis, Firebase",
    link: "https://reddit-newsletter.vercel.app/login",
    description:
      "Developed a reddit-summary newsletter by Leveraging Go backend for Reddit API post retrieval and email distribution, \n GPT API for summary generation, and streamlined inter-service communication via Redis queue",
  },
  {
    image: SE,
    title: "LA-Times Search Engine",
    subtitle: "Java",
    link: "https://github.com/Adelpzk/LA-Times-Search-Engine",
    description:
      "Developed a search engine in Java for interactive retrieval of 150,000 LA Times articles using NLP techniques. Achieved sub-second retrieval times and integrated query-based snippet summaries for enhanced user experience."
  },
  {
    image: Distributed,
    title: "Distributed Systems Labs ",
    subtitle: "Java, Scala, C++, Apache Thrift, Apache Spark, Apache Zookeeper, RPCs, MPI",
    link: "https://github.com/Adelpzk/Distributed-Systems-Labs",
    description:
      "Developed and implemented distributed systems solutions, including RPCs for password hashing, big data analysis using Spark, fault tolerant key-value storage and load balancer, with Backend nodes replication for a DHT project."
  }
];

const Projects = () => {
  return (
    <section className="projects">
      {projects.map((project, index) => (
        <a href={project.link} className="project-card" key={index}>
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-details">
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </section>
  );
};

export default Projects;
