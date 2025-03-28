import React, { useState, useEffect } from 'react';


const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample project data
  const sampleProjects = [
    {
      id: 1,
      title: 'Custom Product Tool (React)',
      description: 'A felxible online product editor to edit, send, and download image data.This version is built using React for a more streamlined experience.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Javascript', 'WIX integration'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/warrenscipio/GDC-custom-product-host',
      demoUrl: 'https://warrenscipio.github.io/GDC-custom-product-host/'
    },
    {
      id: 2,
      title: 'Custom Product Tool (Godot)',
      description: 'A felxible online product editor to edit, send, and download image data. This version is built using Godot for a more interactive experience.',
      image: '/api/placeholder/400/250',
      technologies: ['GDScript', 'Node.js', 'Javascript', 'WIX integration'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/warrenscipio/godot-web-app-host',
      demoUrl: 'https://warrenscipio.github.io/godot-web-app-host/'
    },
    {
      id: 3,
      title: 'Pathfinder Roll20 Chrome extension',
      description: 'Chrome extension that interacts with the real-time chat system in Roll20 to provide quick access to custom roll macros.',
      image: '/api/placeholder/400/250',
      technologies: ['Javascript', 'Node.js', 'Webpack'],
      category: 'Frontend',
      githubUrl: 'https://github.com/warrenscipio/pathfinder-roll20-extension',
      demoUrl: ''
    },
    {
      id: 4,
      title: 'General Test Maintainer',
      description: 'A backend application that allows users to do CRUD operations for creating data temporarily on several Oracle tables. This project was used to improve the efficiency of testing by allowing users to create and manage test data easily. The application was made to be flexible and was used by several Cerner Oracle teams.',
      image: '/api/placeholder/400/250',
      technologies: ['Java', 'Maven', 'Apache Velocity', 'Oracle DB'],
      category: 'Backend',
      githubUrl: 'https://github.com/warrenscipio/Feature-Flag-test-project',
      demoUrl: ''
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and deployed to GitHub Pages.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Webpack', 'GitHub Pages'],
      category: 'Frontend',
      githubUrl: 'https://github.com/yourusername/portfolio',
      demoUrl: 'https://yourusername.github.io'
    },
    {
      id: 6,
      title: 'Wandering Talos',
      description: 'A small puzzel game made in a Godot Wild Jam. The game features a rock... and a path that the player must navigate to reach the end...if they can find the end.',
      image: '/api/placeholder/400/250',
      technologies: ['GDScript'],
      category: 'Game Development',
      githubUrl: 'https://github.com/warrenscipio/folklore-game-jam',
      demoUrl: 'https://warrenscipio.itch.io/wandering-talos'
    },
    {
      id: 7,
      title: 'Burger Blaster',
      description: 'A small game made in a Godot Wild Jam. You are the last food stand, will you feed everyone or will you... continue to feed everyone... may your burgers strike true.',
      image: '/api/placeholder/400/250',
      technologies: ['GDScript'],
      category: 'Game Development',
      githubUrl: 'https://github.com/warrenscipio/last-stand-game-jam',
      demoUrl: 'https://ryancross.itch.io/burger-blaster'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Game Development'];

  // Simulate fetching projects from an API or GitHub
  useEffect(() => {
    const fetchProjects = async () => {
      // In a real application, you would fetch projects from GitHub API or your backend
      // For now, we'll use the sample data
      setTimeout(() => {
        setProjects(sampleProjects);
        setLoading(false);
      }, 1000); // Simulate network delay
    };

    fetchProjects();
  }, []);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="projects-page">
      <div className="projects-container">
        <aside className="projects-sidebar">
          <div className="sidebar-header">
            <h2>Categories</h2>
          </div>
          <ul className="category-list">
            {categories.map(category => (
              <li key={category} className={activeCategory === category ? 'active' : ''}>
                <button onClick={() => setActiveCategory(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
          <div className="sidebar-header">
            <h2>Filter</h2>
          </div>
          <div className="filter-group">
            <h3>Technologies</h3>
            <div className="filter-options">
              <label>
                <input type="checkbox" name="react" /> React
              </label>
              <label>
                <input type="checkbox" name="node" /> Node.js
              </label>
              <label>
                <input type="checkbox" name="mongodb" /> MongoDB
              </label>
              <label>
                <input type="checkbox" name="typescript" /> TypeScript
              </label>
            </div>
          </div>
          <div className="filter-group">
            <h3>Sort By</h3>
            <select className="sort-select">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </aside>

        <main className="projects-grid-container">
          <h1 className="projects-title">My Projects</h1>
          {loading ? (
            <div className="loading-spinner">Loading projects...</div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Code
                      </a>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="projects-footer">
            
          </div>
        </main>
      </div>

      <style jsx>{`
        .projects-page {
          padding: 20px 0;
        }
        
        .projects-container {
          display: flex;
          gap: 30px;
        }
        
        .projects-sidebar {
          width: 250px;
          flex-shrink: 0;
          background-color: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          height: 100%;
        }
        
        .sidebar-header {
          margin-bottom: 15px;
          border-bottom: 1px solid #e9ecef;
          padding-bottom: 10px;
        }
        
        .sidebar-header h2 {
          font-size: 1.2rem;
          color: #0366d6;
        }
        
        .category-list {
          list-style: none;
          padding: 0;
          margin-bottom: 25px;
        }
        
        .category-list li {
          margin-bottom: 10px;
        }
        
        .category-list button {
          background: none;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          width: 100%;
          text-align: left;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        
        .category-list button:hover {
          background-color: #f1f8ff;
        }
        
        .category-list li.active button {
          background-color: #0366d6;
          color: white;
        }
        
        .filter-group {
          margin-bottom: 20px;
        }
        
        .filter-group h3 {
          font-size: 1rem;
          margin-bottom: 10px;
        }
        
        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .filter-options label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        
        .sort-select {
          width: 100%;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ced4da;
        }
        
        .projects-grid-container {
          flex-grow: 1;
          position: relative;
        }
        
        .projects-title {
          margin-bottom: 20px;
          font-size: 1.8rem;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        
        .project-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .project-image {
          height: 180px;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }
        
        .project-content {
          padding: 20px;
        }
        
        .project-title {
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: #0366d6;
        }
        
        .project-description {
          margin-bottom: 15px;
          color: #6c757d;
          font-size: 0.9rem;
        }
        
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 15px;
        }
        
        .tech-tag {
          background-color: #f1f8ff;
          color: #0366d6;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
        }
        
        .project-links {
          display: flex;
          gap: 10px;
        }
        
        .project-link {
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 0.9rem;
          transition: background-color 0.3s;
          flex: 1;
          text-align: center;
        }
        
        .project-link:nth-child(1) {
          background-color: #24292e;
          color: white;
        }
        
        .project-link:nth-child(2) {
          background-color: #0366d6;
          color: white;
        }
        
        .project-link:hover {
          opacity: 0.9;
          text-decoration: none;
        }
        
        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          color: #6c757d;
        }
        
        .projects-footer {
          position: relative;
          height: 100px;
          margin-top: 30px;
        }
        
        .projects-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: linear-gradient(to bottom, rgba(245, 245, 245, 0), rgba(245, 245, 245, 1));
        }
        
        @media (max-width: 768px) {
          .projects-container {
            flex-direction: column;
          }
          
          .projects-sidebar {
            width: 100%;
            margin-bottom: 20px;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;