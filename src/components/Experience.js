import React from "react";
import "../styles/Experience.css";
import waterloo from "../assets/University_of_Waterloo.svg.png";
import TR from "../assets/TR.png";
import toyota from "../assets/toyota.jpeg";
import theScore from "../assets/theScore.png";
import CapitalOne from "../assets/CapitalOne.png";
import Geotab from "../assets/Geotab.png";
import Shinydocs from "../assets/Shinydocs.jpeg";

const experiences = [
  {
    logo: CapitalOne,
    title: "Capital One",
    role: "Software Engineering Intern",
    location: "Toronto, ON, Canada",
    year: "Jan 2025 - Apr 2025",
  },
  {
    logo: theScore,
    title: "theScore",
    role: "Software Engineering Intern",
    location: "Toronto, ON, Canada",
    year: "Sep 2024 - Dec 2024",
  },
  {
    logo: Geotab,
    title: "Geotab",
    role: "Software Developer Intern",
    location: "Waterloo, ON, Canada",
    year: "May 2023 - April 2024",
  },
  {
    logo: toyota,
    title: "Toyota",
    role: "Full stack Developer Intern",
    location: "Waterloo, ON, Canada",
    year: "Sep 2022 - Dec 2022",
  },
  {
    logo: Shinydocs,
    title: "Shinydocs",
    role: "Software Developer Intern",
    location: "Waterloo, ON, Canada",
    year: "Jan 2022 - April 2022",
  },
  {
    logo: TR,
    title: "Thomson Reuters",
    role: "Solution Architect Intern",
    location: "Toronto, ON, Canada",
    year: "Jun 2021 - Aug 2021",
  },
  {
    logo: waterloo, // Replace with your image path
    title: "University of Waterloo",
    role: "Bachelor's of Management Engineering - 2025",
    location: "Waterloo, ON, Canada",
    year: "2020 - 2025",
  },
];

const Experience = () => {
  return(
    <section className="experience">
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <img src={exp.logo} alt={exp.title} className="experience-logo" />
          <div className="experience-details">
            <h3>{exp.title}</h3>
            <p>{exp.role}</p>
            <p className="experience-meta">{exp.location}</p>
            <p className="experience-meta">{exp.year}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
