import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="home-header">
        <div className="header-content">
          <h1>서울대 정보문화학 프로젝트 쇼케이스</h1>
          <p>혁신적인 사회문제 해결 솔루션</p>
        </div>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => navigate(project.route)}
          >
            <div className="project-card-inner">
              <div
                className="project-color-block"
                style={{ backgroundColor: project.color }}
              />
              <div className="project-content">
                <div className="project-header">
                  <h2>{project.name}</h2>
                  <div
                    className="project-indicator"
                    style={{ backgroundColor: project.color }}
                  />
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <span className="project-category">{project.category}</span>
                  <span
                    className="project-arrow"
                    style={{ color: project.color }}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
