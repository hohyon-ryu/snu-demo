import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="home-header">
        <h1>서울대 정보문화학 프로젝트 쇼케이스</h1>
        <p>혁신적인 사회문제 해결 솔루션</p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => navigate(project.route)}
            style={{ borderColor: project.color }}
          >
            <div
              className="project-card-header"
              style={{ backgroundColor: project.color }}
            >
              <h2>{project.name}</h2>
            </div>
            <div className="project-card-body">
              <p className="project-description">{project.description}</p>
              <span
                className="project-category"
                style={{ color: project.color }}
              >
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
