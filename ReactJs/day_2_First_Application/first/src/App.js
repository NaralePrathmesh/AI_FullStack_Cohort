import "./App.css";

function App() {
  return (
    <div>

      <nav>
        <b>PN.</b>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p>HELLO, I'M</p>

        <h1>
          Prathmesh <span>Narale</span>
        </h1>

        <h2>AI Full Stack Developer</h2>

        <small>
          MCA graduate from Pune, passionate about building modern
          and user-friendly web applications using frontend,
          backend and AI technologies.
        </small>

        <a className="btn" href="#projects">
          View My Work →
        </a>
      </section>

      <section id="about">
        <h2>About Me</h2>

        <p className="about">
          I'm Prathmesh Narale, a recently graduated MCA student from
          Dr. D.Y. Patil Institute of Management and Research, Pimpri,
          Pune. I enjoy creating responsive web applications and
          currently focus on AI and Full Stack Development.
        </p>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Python</span>
          <span>Flask</span>
          <span>MySQL</span>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="projects">

          <div className="card">
            <h3>RedStone Fitness Club</h3>
            <p>
              Fitness management website with OTP login,
              membership plans, payments and admin management.
            </p>
          </div>

          <div className="card">
            <h3>Finance Dashboard</h3>
            <p>
              React-based finance dashboard for managing
              transactions and viewing spending insights.
            </p>
          </div>

          <div className="card">
            <h3>AI Security Framework</h3>
            <p>
              AI-based security system designed to analyze
              AI agent behavior and provide dynamic trust scores.
            </p>
          </div>

        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let's Connect</h2>

        <p>Pune, Maharashtra</p>

        <div className="links">
          <a
            href="https://linkedin.com/in/prathmesh-narale-6542b6257"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/NaralePrathmesh"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer>
        © 2026 Prathmesh Narale
      </footer>

    </div>
  );
}

export default App;