import React, { useState, useEffect } from 'react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample project data
  const sampleProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with cart, checkout, and payment processing.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      demoUrl: 'https://ecommerce-demo.example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Redux', 'Firebase'],
      category: 'Frontend',
      githubUrl: 'https://github.com/yourusername/task-manager',
      demoUrl: 'https://task-app-demo.example.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location search and 5-day forecast.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      category: 'Frontend',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      demoUrl: 'https://weather-dash.example.com'
    },
    {
      id: 4,
      title: 'Blog API',
      description: 'RESTful API for a blog application with authentication and authorization.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'Backend',
      githubUrl: 'https://github.com/yourusername/blog-api',
      demoUrl: 'https://blog-api.example.com/docs'
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
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging and group chats.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/yourusername/chat-app',
      demoUrl: 'https://chat-app.example.com'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];

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
            <div className="projects-fade"></div>
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