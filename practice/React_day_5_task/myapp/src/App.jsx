
import React from 'react';
import './App.css';

const Home = () => {
  return (
    <section id="home" className="section home">
      <h1>Welcome to My Website</h1>
      <p>This is the Home section.</p>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section about">
      <h1>About Us</h1>
      <p>Learn more about our company and our mission.</p>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="section services">
      <h1>Our Services</h1>
      <p>We provide modern web development services.</p>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h1>Contact Us</h1>
      <p>Email: contact@mywebsite.com</p>
      <p>Phone: +91 9876543210</p>
    </section>
  );
};

function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>

    </>
  );
}

export default App;
