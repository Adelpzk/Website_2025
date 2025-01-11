import React from "react";
import "../styles/Recommendations.css";
import nadir from "../assets/Nadir.jpeg";
import andrew from "../assets/Andrew.jpeg";
import ryan from "../assets/Ryan.jpeg";
import salil from "../assets/Salil.jpeg";
import greg from "../assets/Greg.jpeg";

const recommendations = [
    {
      name: 'R. Ryan Driskel',
      title: 'Senior Engineering Manager | Growing Engineers into Leaders!',
      date: 'December 20, 2024',
      managerRelation: 'Ryan was my manager @ theScore',
      avatar: ryan, // Replace with actual image path
      recommendation:
        'Adel was a fantastic addition to the team over the last four months. We very much enjoyed his presence, ability to learn, and passion to deliver.',
    },
    {
      name: 'Andrew Fox',
      title: 'Software Development Manager at Geotab',
      date: 'April 8, 2024',
      managerRelation: 'Andrew was my manager @ Geotab',
      avatar: andrew,
      recommendation:
        'Adel was on my team for multiple co-op terms and part-time while he was going to school. He quickly became a valued member of the team who fit in great. Really appreciated his hard work and drive that he showed. He worked hard and always planned ahead to get more work lined up before he was idle. The team really saw him develop professionally over the time with our team. I’m hoping he comes back full time next year. Anyone is going to be lucky to have him on their team.',
    },
    {
      name: 'Salil Johri',
      title: 'Software Developer',
      date: 'August 26, 2023',
      managerRelation: 'Salil was my mentor @ Geotab',
      avatar: salil, // Replace with actual image path
      recommendation:
        'Adel is a very skilled and amazing worker. Having a lot of fullstack experience under his belt, he came onto our team which was mainly backend focused and was able to deliver exceptional results while learning a lot and adapting quickly to a stressful environment. There were many cases where Adel was able to simultaneously balance taking on a new code area while at the same time effectively communicating statuses on projects he was working on, and deliver exceptional results. He never asked the same question twice and by the end of his internship experience at Geotab I genuinely thought he was a full-time employee and was surprised when the end of the term was quickly approaching. Through work he’s done he has given us a great baseline for improving monitoring and reliability of crucial data ingestion systems and I am glad to have been able to mentor him and see him really grow and shine in this role. I hope our paths keep crossing in the future and all the best!',
    },
    {
      name: 'Greg Evers',
      title: 'Manager in Information Systems',
      date: 'January 10, 2023',
      managerRelation: 'Greg was my manager @ Toyota',
      avatar: greg, // Replace with actual image path
      recommendation:
        'Adel is a motivated and skilled young engineer. He was able to assert himself among a veteran team to ensure he was able to excel in completing his assignments on time and with high quality. He has a bright professional future ahead of him!',
    },
    {
      name: 'Nadir Hassan',
      title: 'Team Lead and Architect at Thomson Reuters',
      date: 'September 5, 2021',
      managerRelation: 'Nadir was my manager @ Thomson Reuters',
      avatar: nadir, // Replace with actual image path
      recommendation:
        'Adel and his team were tasked with an architecture problem in Thomson Reuters. There were a lot of new elements to the solution we were looking for, and despite that, they learned it on the job. Adel and his team did a tremendous job of going through the whole problem, defining what we need, and getting a robust and scalable solution for us. They worked fast and independently, finishing the project ahead of schedule while being able to write informative and detailed documentation, putting everything they worked on into a well-done and concise presentation. I enjoyed talking about different technical approaches to getting the task completed. It was a pleasure to work with Adel and I hope we get to work again.',
    },
  ];
  

const Recommendations = () => {
  return (
    <section className="recommendations">
      {recommendations.map((rec, index) => (
        <div className="recommendation-card" key={index}>
          <div className="recommendation-header">
            <img
              src={rec.avatar}
              alt={rec.name}
              className="recommendation-avatar"
            />
            <div className="recommendation-info">
              <h3>{rec.name}</h3>
              <h4>{rec.title}</h4>
              <p className="recommendation-date">
                {rec.date}, <span>{rec.managerRelation}</span>
              </p>
            </div>
          </div>
          <div className="recommendation-body">
            <p>{rec.recommendation}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Recommendations;
