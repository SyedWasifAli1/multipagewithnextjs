
export default function Contact() {
  return (
    <>
      
      <main className="main">
        {/* Contact Section */}
        <section className="contact">
          <h1>Contact Me</h1>
          <p>If you have any questions or would like to discuss a project, feel free to reach out. I look forward to connecting with you!</p>

          <form className="contactForm">
            <div className="formGroup">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>
            <button type="submit" className="submitButton">Send Message</button>
          </form>
        </section>
      </main>
      
    </>
  );
}
