import React, { useState } from 'react';
import './Projects.css';

// 示例数据
const projects = {
  national: [
    {
      id: 1,
      name: 'NSFC项目A',
      time: '2022-2024',
      description: '该项目旨在研究人工智能在医疗诊断中的应用。',
      links: [
        { label: '论文', url: 'https://example.com/paper1' },
        { label: '代码', url: 'https://example.com/code1' }
      ]
    },
    {
      id: 2,
      name: 'NSFC项目B',
      time: '2021-2023',
      description: '该项目专注于自然语言处理技术的改进。',
      links: [
        { label: '论文', url: 'https://example.com/paper2' },
        { label: '代码', url: 'https://example.com/code2' }
      ]
    }
  ],
  corporate: [
    {
      id: 3,
      name: '企业合作项目A',
      time: '2023-2025',
      description: '该项目与某科技公司合作，研究智能推荐系统。',
      links: [
        { label: '论文', url: 'https://example.com/paper3' },
        { label: '代码', url: 'https://example.com/code3' }
      ]
    },
    {
      id: 4,
      name: '企业合作项目B',
      time: '2022-2024',
      description: '该项目与某制造企业合作，研究工业自动化技术。',
      links: [
        { label: '论文', url: 'https://example.com/paper4' },
        { label: '代码', url: 'https://example.com/code4' }
      ]
    }
  ]
};

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <div className="Projects">
      <div className="Project-category">
        <div className="Category-line"></div>
        <h2>国家级项目</h2>
      </div>
      {projects.national.map((project) => (
        <div key={project.id} className="Project-card">
          <div className="Project-header" onClick={() => toggleProject(project.id)}>
            <h3>{project.name}</h3>
            <span>{project.time}</span>
          </div>
          {expandedProject === project.id && (
            <div className="Project-details">
              <p>{project.description}</p>
              <div className="Project-links">
                {project.links.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="Project-category">
        <div className="Category-line"></div>
        <h2>企业合作项目</h2>
      </div>
      {projects.corporate.map((project) => (
        <div key={project.id} className="Project-card">
          <div className="Project-header" onClick={() => toggleProject(project.id)}>
            <h3>{project.name}</h3>
            <span>{project.time}</span>
          </div>
          {expandedProject === project.id && (
            <div className="Project-details">
              <p>{project.description}</p>
              <div className="Project-links">
                {project.links.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;