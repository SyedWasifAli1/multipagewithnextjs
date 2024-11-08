export default function About() {
    return (
      <>
        <main className="main">
          {/* About Section */}
          <section className="about">
            <h1>About Me</h1>
            <p>
              I am a skilled Full Stack Developer specializing in Next.js, MERN (MongoDB, Express, React, Node.js), MEAN (MongoDB, Express, Angular, Node.js), and ASP.NET. 
              With a passion for building dynamic, efficient, and scalable web applications, I am committed to delivering high-quality solutions to meet my customers&apos; needs.
            </p>
          </section>
  
          {/* Mission Section */}
          <section className="mission">
            <h2>My Mission</h2>
            <p>
              My mission is to empower businesses by crafting tailored, innovative solutions that address complex challenges, streamline operations, and enhance user experiences. 
              I aim to support clients in their digital transformation journeys by leveraging cutting-edge technologies and industry best practices.
            </p>
          </section>
  
          {/* Values Section */}
          <section className="values">
            <h2>My Values</h2>
            <ul>
              <li><strong>Quality:</strong> I prioritize the quality of my work to ensure seamless functionality and exceptional user experience.</li>
              <li><strong>Commitment:</strong> I am dedicated to meeting deadlines, maintaining transparency, and achieving results for my clients.</li>
              <li><strong>Innovation:</strong> I continuously seek innovative solutions to stay ahead in a rapidly evolving tech landscape.</li>
            </ul>
          </section>
        </main>
      </>
    );
  }
  