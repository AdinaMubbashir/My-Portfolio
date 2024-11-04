import React from 'react';
import '../App.css';

const projectData = [
  {
    id: 1,
    title: 'Molecule Visualizer',
    information: '(C, Python, JavaScript, jQuery, SQLite, HTML, CSS)',
    description: 'Developed a full-stack application for the visualization and editing of molecular structures from SDF files, incorporating JavaScript and jQuery for dynamic user interactions and efficient data handling through AJAX. Implemented back-end processes using Python and C, enabling sophisticated data operations ',
    image: 'https://images.pond5.com/abstract-visualization-molecule-glowing-atom-footage-201224075_iconl.jpeg',
    repoLink: 'https://github.com/AdinaMubbashir/Molecule-Visualizer'
  },
  {
    id: 2,
    title: 'COVID-19 Crisis Analyzer',
    information: '(Python, Pandas, Seaborn, Matplotlib).',
    description: 'Developed a COVID-19 data visualizer in Python, utilizing Pandas, Seaborn, and Matplotlib to present comprehensive pandemic statistics from Statistics Canada, focusing on trends and impacts.',
    image: 'https://www.baywardbulletin.ca/wp-content/uploads/2020/04/COVID19.jpg',
    repoLink: 'https://github.com/AdinaMubbashir/COVID-19-Statistics'
  },
  {
    id: 3,
    title: 'Strategic Connect ',
    information: '(Java, JUnit)',
    description: 'Architected a full-scale, highly-interactive Connect Four game in Java, leveraging advanced object-oriented design patterns to ensure flexibility, maintainability, and future extensibility. Delivered a dynamic, user-centric interface with responsive design, incorporating features such as real-time state management, game-saving, and loading capabilities for seamless user continuity',
    image: 'https://media.istockphoto.com/id/1318302033/vector/infinite-loops-abstract-design-element.jpg?s=612x612&w=0&k=20&c=dGQ1uyMti5Jye41mKRUHQp06gVrE8lbn4xpcat3iKtA=',
    repoLink: 'https://github.com/AdinaMubbashir/Connect-Four'
  },
  {
    id: 4,
    title: 'Twitter Dataset',
    information: '(C)',
    description: 'Utilizes linked lists to enable users to generate, showcase, and search tweets based on mentions. Allows users to store and load tweets from a local file.',
    image: 'https://i.pinimg.com/originals/01/96/65/019665fa7bbc178814271495f3e68ef1.jpg',
    repoLink: 'https://github.com/AdinaMubbashir/Twitter-Dataset'
  },
  {
    id: 5,
    title: 'To-Do-List',
    information: '(JavaScript, HTML, CSS)',
    description: 'Web application that allows users to add, manage, and filter tasks efficiently. Offers interactive features such as task completion marking, filtering by task status (all, pending, or completed), and a quick clear-all option.',
    image: 'https://img.freepik.com/premium-vector/neon-icon-clipboard-with-checklist-black-background_516670-802.jpg',
    repoLink: 'https://github.com/AdinaMubbashir/To-Do-List'
  },
  {
    id: 6,
    title: 'Car Rental Management System',
    information: '(C)',
    description: 'Manages a car rental system using linked lists to store information about available cars, rented cars, and cars under repair.',
    image: 'https://media.istockphoto.com/id/1210346262/sv/vektor/neon-bl%C3%A5-bil-ikon-p%C3%A5-svart-bl%C3%A5-bakgrund.jpg?s=170667a&w=0&k=20&c=nww1gNvgHnXwU8_pMhOhZWCEd1jW2N33onBka5tlVWw=',
    repoLink: 'https://github.com/AdinaMubbashir/Auto-Shop'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h2>&lt;/Projects&gt;</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p><strong></strong> {project.information}</p>
            <p>{project.description}</p>
            <button className="project-button" onClick={() => window.open(project.repoLink, '_blank')}>Link to Repo</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

