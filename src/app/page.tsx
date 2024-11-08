export default function Home() {
  return (
    <>
      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to My Portfolio</h1>
          <p>Your one-stop solution for all your needs</p>
          <button className="ctaButton">Get Started</button>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>Our Features</h2>
          <div className="featureCards">
            <div className="featureCard">
              <h3>Feature 1</h3>
              <p>Discover the best features we offer for your success.</p>
            </div>
            <div className="featureCard">
              <h3>Feature 2</h3>
              <p>Unlock the potential with our powerful tools.</p>
            </div>
            <div className="featureCard">
              <h3>Feature 3</h3>
              <p>Simple solutions to streamline your tasks.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects">
          <h2>Our Projects</h2>
          <div className="projectCards">
            <div className="projectCard">
              <img
                src="/image/project1.png"
                alt="Project 1"
                className="projectImage"
              />
              <h3>Project 1</h3>
              <p>A cutting-edge web application developed using Next.js and Node.js.</p>
              <button className="viewButton">View Project</button>
            </div>
            <div className="projectCard">
              <img
                src="/image/project2.png"
                alt="Project 2"
                className="projectImage"
              />
              <h3>Project 2</h3>
              <p>An innovative e-commerce platform powered by the MERN stack.</p>
              <button className="viewButton">View Project</button>
            </div>
            <div className="projectCard">
              <img
                src="/image/project3.png"
                alt="Project 3"
                className="projectImage"
              />
              <h3>Project 3</h3>
              <p>A dynamic dashboard for real-time analytics built with React and Firebase.</p>
              <button className="viewButton">View Project</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
