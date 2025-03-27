import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Webpack', 'Redux'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'RESTful APIs', 'Java','Godot','Cloudflare'] },
    { category: 'Other', items: ['Git', 'GitHub', 'CI/CD', 'Agile Methodologies', 'Playwright','Problem Solving'] }
  ];
  
  const interests = [
    {
      title: 'Web Development',
      description: 'Building responsive and intuitive user interfaces that solve real-world problems.'
    },
    {
      title: 'Game Development',
      description: 'Designing and bringing to life game ideas that players can enjoy.'
    },
    {
      title: 'Learning New Technologies',
      description: 'Constantly expanding my skillset and staying up-to-date with the latest industry trends.'
    }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Hello, I'm <span className="highlight">Warren Scipio</span></h1>
        <h2>Fullstack Engineer & Game Developer</h2>
        <p>I build modern web applications with a focus on user experience and turn my game design ideas into reality.</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">View My Work</Link>
          <Link to="/profile" className="btn secondary">About Me</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <h3>{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">What Excites Me</h2>
        <div className="interests-container">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .home-page {
          padding: 20px 0;
        }
        
        .hero {
          text-align: center;
          padding: 60px 20px;
          background-color:rgb(49, 49, 49);
          border-radius: 8px;
          margin-bottom: 40px;
        }
        
        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        
        .hero h2 {
          font-size: 1.5rem;
          color: #6c757d;
          margin-bottom: 20px;
          font-weight: 400;
        }
        
        .highlight {
          color: #0366d6;
        }
        
        .hero-buttons {
          margin-top: 30px;
        }
        
        .btn {
          display: inline-block;
          padding: 10px 20px;
          margin: 0 10px;
          border-radius: 4px;
          font-weight: 500;
          transition: all 0.3s;
        }
        
        .btn.primary {
          background-color: #0366d6;
          color: white;
        }
        
        .btn.primary:hover {
          background-color: #0259b8;
          text-decoration: none;
        }
        
        .btn.secondary {
          background-color: transparent;
          border: 2px solid #0366d6;
          color: #0366d6;
        }
        
        .btn.secondary:hover {
          background-color: #e6f0fa;
          text-decoration: none;
        }
        
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .skill-group {
          flex: 1;
          min-width: 250px;
          background-color: rgb(49, 49, 49);
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .skill-group h3 {
          margin-bottom: 15px;
          color: #0366d6;
        }
        
        .skill-list {
          list-style: none;
        }
        
        .skill-item {
          padding: 5px 0;
          position: relative;
          padding-left: 20px;
        }
        
        .skill-item:before {
          content: "•";
          color: #0366d6;
          position: absolute;
          left: 0;
        }
        
        .interests-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .interest-card {
          flex: 1;
          min-width: 250px;
          background-color: rgb(49, 49, 49);
          border-radius: 8px;
          padding: 25px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .interest-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .interest-card h3 {
          margin-bottom: 10px;
          color: #0366d6;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero h2 {
            font-size: 1.2rem;
          }
          
          .skill-group, .interest-card {
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;