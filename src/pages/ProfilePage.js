import React from 'react';

const ProfilePage = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2022 - Present',
      description: [
        'Lead the frontend development of the company\'s flagship product, resulting in a 40% increase in user engagement.',
        'Implemented modern React practices including hooks, context API, and custom hook patterns to improve code quality and maintainability.',
        'Mentored junior developers through code reviews and pair programming sessions.'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations',
      period: 'Mar 2019 - Dec 2021',
      description: [
        'Developed responsive web applications using React, Redux, and TypeScript.',
        'Worked closely with designers to implement pixel-perfect UI components.',
        'Improved application performance by 35% through code optimization and lazy loading techniques.'
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'StartUp Labs',
      period: 'Jun 2018 - Feb 2019',
      description: [
        'Assisted in the development of client websites using HTML5, CSS3, and JavaScript.',
        'Implemented responsive designs and ensured cross-browser compatibility.',
        'Participated in daily stand-ups and agile development processes.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2014 - 2018',
      details: 'GPA: 3.8/4.0, Dean\'s List, Specialized in Web Development and Software Engineering'
    }
  ];

  const certifications = [
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'React Advanced Concepts', issuer: 'Frontend Masters', year: '2022' },
    { name: 'JavaScript Algorithms and Data Structures', issuer: 'Udemy', year: '2021' }
  ];

  const skills = {
    advanced: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Webpack', 'Git'],
    intermediate: ['Node.js', 'Express.js', 'TypeScript', 'GraphQL', 'Jest', 'MongoDB'],
    familiar: ['AWS', 'Docker', 'Python', 'React Native', 'Firebase']
  };

  return (
    <div className="profile-page">
      <section className="profile-header">
        <div className="profile-image">
          <div className="profile-image-placeholder">WS</div>
        </div>
        <div className="profile-info">
          <h1>Your Name</h1>
          <h2>Senior Frontend Developer</h2>
          <p>Passionate web developer with 5+ years of experience in building modern, responsive web applications. Specialized in React.js ecosystem and committed to writing clean, performant code.</p>
          <div className="profile-contact">
            <a href="mailto:warrenscipio@gmail.com" className="contact-link">warrenscipio@gmail.com</a>
            <a href="https://github.com/warrenscipio" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            <a href="https://www.linkedin.com/in/warrenscipio/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <ul className="timeline-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-year">{edu.year}</div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <div className="education-institution">{edu.institution}</div>
                <p>{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-wrapper">
          <div className="skill-category">
            <h3>Advanced</h3>
            <div className="skill-tags">
              {skills.advanced.map((skill, index) => (
                <span key={index} className="skill-tag advanced">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Intermediate</h3>
            <div className="skill-tags">
              {skills.intermediate.map((skill, index) => (
                <span key={index} className="skill-tag intermediate">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Familiar</h3>
            <div className="skill-tags">
              {skills.familiar.map((skill, index) => (
                <span key={index} className="skill-tag familiar">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <div className="certification-year">{cert.year}</div>
              <div className="certification-content">
                <h3>{cert.name}</h3>
                <div className="certification-issuer">Issued by {cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .profile-page {
          padding: 20px 0;
        }
        
        .profile-header {
          display: flex;
          align-items: center;
          background-color: rgb(49, 49, 49);
          border-radius: 8px;
          padding: 30px;
          margin-bottom: 40px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .profile-image {
          margin-right: 30px;
        }
        
        .profile-image-placeholder {
          width: 120px;
          height: 120px;
          border-radius: 60px;
          background-color: #0366d6;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
        }
        
        .profile-info h1 {
          font-size: 2rem;
          margin-bottom: 5px;
        }
        
        .profile-info h2 {
          color: #6c757d;
          font-size: 1.2rem;
          margin-bottom: 15px;
          font-weight: 400;
        }
        
        .profile-contact {
          margin-top: 20px;
        }
        
        .contact-link {
          margin-right: 20px;
          display: inline-flex;
          align-items: center;
        }
        
        .timeline {
          position: relative;
          padding-left: 30px;
        }
        
        .timeline:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background-color: rgb(49, 49, 49);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 30px;
        }
        
        .timeline-marker {
          position: absolute;
          left: -38px;
          top: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid #0366d6;
          background-color: white;
        }
        
        .timeline-content {
          background-color: rgb(49, 49, 49);
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .timeline-header h3 {
          margin: 0;
          color: #0366d6;
        }
        
        .timeline-period {
          color: #6c757d;
          font-size: 0.9rem;
        }
        
        .timeline-company {
          font-weight: 500;
          margin-bottom: 10px;
        }
        
        .timeline-description {
          list-style-position: inside;
          padding-left: 0;
        }
        
        .timeline-description li {
          margin-bottom: 5px;
        }
        
        .education-item {
          display: flex;
          background-color: rgb(49, 49, 49);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .education-year {
          min-width: 100px;
          color: #6c757d;
          font-weight: 500;
        }
        
        .education-content h3 {
          margin: 0 0 10px 0;
          color: #0366d6;
        }
        
        .education-institution {
          font-weight: 500;
          margin-bottom: 10px;
        }
        
        .skills-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .skill-category {
          background-color: rgb(49, 49, 49);
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .skill-category h3 {
          margin: 0 0 15px 0;
          color: #0366d6;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .skill-tag {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
        }
        
        .skill-tag.advanced {
          background-color: #dff0d8;
          color: #3c763d;
        }
        
        .skill-tag.intermediate {
          background-color: #d9edf7;
          color: #31708f;
        }
        
        .skill-tag.familiar {
          background-color: #fcf8e3;
          color: #8a6d3b;
        }
        
        .certifications-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .certification-item {
          display: flex;
          background-color: rgb(49, 49, 49);
          border-radius: 8px;
          padding: 15px 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .certification-year {
          min-width: 70px;
          color: #6c757d;
          font-weight: 500;
        }
        
        .certification-content h3 {
          margin: 0 0 5px 0;
          color: #0366d6;
          font-size: 1.1rem;
        }
        
        .certification-issuer {
          font-size: 0.9rem;
          color: #6c757d;
        }
        
        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            text-align: center;
          }
          
          .profile-image {
            margin-right: 0;
            margin-bottom: 20px;
          }
          
          .profile-contact {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
          
          .contact-link {
            margin-right: 0;
          }
          
          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .timeline-period {
            margin-top: 5px;
          }
          
          .education-item {
            flex-direction: column;
          }
          
          .education-year {
            margin-bottom: 10px;
          }
          
          .certification-item {
            flex-direction: column;
          }
          
          .certification-year {
            margin-bottom: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;