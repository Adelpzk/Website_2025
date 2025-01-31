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
      "uwScoop is a new rideshare application exclusive to University of Waterloo Students. Rather than havingto scroll through rides that dont fit your criteria in a Facebook group, uwScoop automatically matches you with rides that fit your criteria. You meet new people along the way too! uwScoop considers your year, program and music preferences to make your ride most enjoyable",
  },
  {
    image: findwork,
    title: "WaterlooWorks FindWork",
    subtitle: "TypeScript, JavaScript, Next.js, Firebase",
    link: "https://github.com/Adelpzk/ww-findwork?tab=readme-ov-file",
    description:
      "FindWork is an Intelligent Decision Support System (IDSS) designed to simplify the job search process on WaterlooWorks by helping students quickly identify the most relevant job postings. It aims to reduce the time spent on reviewing and shortlisting jobs by presenting users with opportunities that match their preferences."
  },
  {
    image: reddit,
    title: "Reddit Newsletter",
    subtitle: "Golang, Python, Next.js, Redux, Redis, Firebase",
    link: "https://reddit-newsletter.vercel.app/login",
    description:
      "The Reddit Newsletter Application allows users to stay updated with the latest and hottest posts from their favorite subreddits. Users can log in via Reddit, select their preferred subreddits, and receive daily emails summarizing the top conversations and posts. This service ensures that users never miss out on important discussions and updates from the Reddit communities they care about most.",
  },
  {
    image: SE,
    title: "LA-Times Search Engine",
    subtitle: "Java",
    link: "https://github.com/Adelpzk/LA-Times-Search-Engine",
    description:
      "This search engine is designed to retrieve information from LA Times documents spanning the years 1989 and 1990. The engine incorporates query-biased snippets and showcases the top 10 search results. The Search engine was built in Java for interactive retrieval of 150,000 LA Times articles using NLP techniques."
  },
  {
    image: Distributed,
    title: "Distributed Systems Labs ",
    subtitle: "Java, Scala, C++, Apache Thrift, Apache Spark, Apache Zookeeper, RPCs, MPI",
    link: "https://github.com/Adelpzk/Distributed-Systems-Labs",
    description:
      "This Repo contains solutions to various assignments and labs completed for the ECE 454: Distributed Computing course, including RPCs for password hashing, big data analysis using Spark, fault tolerant key-value storage and load balancer, with Backend nodes replication for a DHT project."
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
