import React from 'react';
import '../css/project.css';

const Project = ({ project }) => {
  return (
    <article
      className="project-card"
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="project-content">
        <div className="project-details">
          <h3
            id={`project-${project.id}-title`}
            className="project-title"
          >
            {project.title}
          </h3>
          <p className="project-description">
            {project.description}
          </p>
          <div
            className="technologies-list"
            role="list"
            aria-label="Project technologies"
          >
            {project.keywords.map((keyword, i) => (
              <span
                key={i}
                className="technology-tag"
                role="listitem"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
        
        <div className="project-footer">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label={`View ${project.title} project on GitHub (opens in new tab)`}
          >
            <svg
              className="github-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.4 0 12.07c0 5.34 3.44 9.86 8.21 11.46.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.62-4.04-1.62-.54-1.4-1.32-1.77-1.32-1.77-1.08-.74.08-.72.08-.72 1.2.09 1.83 1.25 1.83 1.25 1.07 1.85 2.8 1.32 3.49 1 .11-.79.42-1.32.76-1.63-2.67-.31-5.47-1.35-5.47-6 0-1.33.46-2.42 1.22-3.27-.12-.31-.53-1.58.11-3.29 0 0 1-.33 3.3 1.25a11.1 11.1 0 0 1 6 0C17.99 4.45 19 4.78 19 4.78c.64 1.71.24 2.98.12 3.29.76.85 1.22 1.94 1.22 3.27 0 4.66-2.8 5.68-5.48 5.99.44.39.83 1.17.83 2.36v3.5c0 .32.21.69.83.57C20.56 21.92 24 17.41 24 12.07 24 5.4 18.63 0 12 0z"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;