
import styles from "@/styles/contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.header}>Get in touch</h1>

      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <h2>Send a Message</h2>
          <form>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Interested In" />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        
        <div className={styles.contactDetails}>
          <div>
            <h3>Call Us</h3>
            <p>09124115768</p>
          </div>
          <div>
            <h3>Visit Us</h3>
            <p>Behind Benue house of assembly ,makurdi</p>
          </div>
          <div>
            <h3>Live Chat</h3>
            <a href="#">Start Chat</a>
          </div>
        </div>
      </div>

      
      <div className={styles.mapContainer}>
        <iframe
          src="https://maps.google.com/maps?q=makurdi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
        ></iframe>
      </div>

      <div className={styles.faqSection}>
        <h2>Frequently asked questions.</h2>
        <div className={styles.faq}>
          <details>
            <summary>where do we contact you?</summary>
            <p>let the map guide you,we are right after benue hotel.</p>
          </details>
          <details>
            <summary>How reliable are your services?</summary>
            <p>Do you really want the best,lets give you a tour.</p>
          </details>
        </div>
      </div>

      <footer className={styles.preFooter}>
        <h2>Join Bem Today. we're getting More Done Together.</h2>
        <div className={styles.preFooterContent}>
          <p>Address: central makurdi</p>
          <p>Phone: 09124115768</p>
          <p>Email: arcanesmile@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;