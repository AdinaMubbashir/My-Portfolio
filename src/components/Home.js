import React from 'react';
import Butterfly from './Butterfly';
import '../App.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <h1>Hi(); I'm</h1>
      <h2>Adina Mubbashir.</h2>
      <h3>A Software Developer</h3>
      <p>I am passionate about learning and tackling challenges, with experience in both frontend and backend development. I thrive in innovative environments that push technical boundaries.</p>
      <a href="https://www.linkedin.com/in/adina-mubbashir/" target="_blank" rel="noopener noreferrer">
        <button>Let's Connect</button>
      </a>
      
      <div className="social-icons">
        <a href="https://github.com/AdinaMubbashir" target="_blank" rel="noopener noreferrer">
          <img src='https://i.pinimg.com/736x/ac/b3/51/acb3513e5a2664ba59bec11222863a40.jpg' alt="GitHub" className="social-icon" />
        </a>
        <a href="mailto:amubbash@uoguelph.ca">
          <img src='https://i.pinimg.com/originals/82/91/44/829144ad9df34a99d3aa10730eeeaad4.jpg' alt="Email" className="social-icon" />
        </a>
      </div>

      <Butterfly style={{ top: '10%', left: '20%' }} />
      <Butterfly style={{ top: '30%', left: '70%' }} />
      <Butterfly style={{ top: '50%', left: '40%' }} />
    </section>
  );
}

export default Home;
