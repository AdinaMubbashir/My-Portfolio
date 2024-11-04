import React from 'react';
import '../App.css';

function About() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="content">
          <h2>&lt;/AboutMe&gt;</h2>
          <p>Hi there! My name is Adina Mubbashir and I am a Software Engineering student at the University of Guelph. Along with my passion for technology and programming, I am also minoring in Project Management, which enables me to manage projects effectively and efficiently.</p>
          <p>As a developer, my primary interest lies in back end development. I am eager to acquire practical, hands-on experience in the software development industry.</p>
          <p>At the moment, my primary focus is to broaden my knowledge and enhance my skills in C#.</p>
        </div>
        <img src="https://media.licdn.com/dms/image/v2/D5603AQERAei3DXMTwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729953287107?e=1736380800&v=beta&t=26q-_njM8uBYiYPoB8jmRLfNZq3C64hUtOJ6An1iRTE" alt="Vinod" />
      </section>

      <section id="skills" className="skills-section">
        <h2>&lt;/Skills&gt;</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="SQL" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" alt="Photoshop" />
          </div>
          <div className="skill-item">
            <img src="https://miro.medium.com/v2/resize:fit:1024/0*-KUTIPtVInLu5nzl.png" alt="SonarQube" />
          </div>
          <div className="skill-item">
            <img src="https://miro.medium.com/v2/resize:fit:866/1*1UBNwRFaslvqt_G3Njw3pg.jpeg" alt="Node.js" />
          </div>
        </div>
      </section>


      <section id="experience" className="experience-section">
        <h2>&lt;/Experience&gt;</h2>
        <div className="timeline">
          <div className="timeline-container left">
            <div className="timeline-content">
              <h3>Software Developer Intern</h3>
              <div className="company-details">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5UGKVEqd2rsXKBf9rxkHEiCKEn6fVVWVMQ&s" alt="NCR Voyix" className="company-logo" />
                <h4>NCR Voyix</h4>
              </div>
              <p>01/2024 - Present</p>
              <ul>
                <li>Collaborated with cross-functional teams to gather requirements, define project scope, and utilized Jira to track development tasks and maintain a fast, adaptable workflow following Agile/Scrum methodologies.</li>
                <li>Built React components to enhance the banking UI, improving maintainability and performance with reusable code and state management.</li>
                <li>Migrated APIs to use RTK Query for fetching account information to optimize data retrieval processes, leverage advanced caching mechanisms, and streamline error handling for enhanced performance and reliability.</li>
                <li>Conducted code reviews, developed unit tests with JUnit, Jest, and Vitest for multi-threaded functionality, and leveraged SonarQube and Git to maintain code quality and integrity.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-container right">
            <div className="timeline-content">
              <h3>Software Developer Intern</h3>
              <div className="company-details">
                <img src="https://pbs.twimg.com/profile_images/1738108924807516161/ZffKpkg5_400x400.jpg" alt="NCR Corporation" className="company-logo" />
                <h4>NCR Corporation</h4>
              </div>
              <p>09/2023 – 01/2024</p>
              <ul>
                <li>Worked closely with the web development team to implement dynamic user interfaces using JavaScript and React, contributing to the development of client-facing websites.</li>
                <li>Enhanced the bank teller interface by designing and implementing new features to address transactional requirements.</li>
                <li>Implemented automated unit and integration tests using Jest to validate functionality and maintain high code quality, identifying and resolving issues early in the development process.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default About;
