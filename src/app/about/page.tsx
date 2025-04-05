import styles from "@/styles/about.module.scss";

export default function AboutPage() {
  return (
    <div className={styles["about-container"]}>
  
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p>
Bem dev hub delivers blazing-fast, pixel-perfect apps—merging sleek design with bulletproof code. From MVP to enterprise, I turn complex problems into scalable, secure, and user-obsessed solutions. Let’s automate, optimize, and future-proof your vision,Zero fluff,Just results...consistent results.
        </p>
      </section>

      <section className={styles.features}>
        <div className={styles["feature-card"]}>
          <h3>We'll Find You the Perfect idea</h3>
          <p>Stuck for inspiration? we'll find you the Perfect idea tailored to your vision and bugdet</p>
        </div>
        <div className={styles["feature-card"]}>
          <h3>We Work with Your Budget</h3>
          <p>Big ideas,any bugdet_lets build smart without breaking the bank.</p>
        </div>
        <div className={styles["feature-card"]}>
          <h3>we deliver the best services</h3>
          <p>Elite codes,flawless results,your exact codes executed to perfection</p>
        </div>
      </section>

      
      <section className={styles.story}>
        <h2>Our Story</h2>
        <p>
          It started with a simple "Hello, World!"—a spark that ignited my passion for building things. Late nights debugging, endless tutorials, and small wins kept me going. Then came my first project: clunky but mine. With each line of code, I grew bolder, tackling APIs, frameworks, and the occasional existential error. Now, I’m not just writing programs; I’m crafting solutions. The journey’s messy, but every crash teaches me to rebuild better.  
        </p>
      </section>

      
      <section className={styles.agents}>
        <h2>Expert Agents</h2>
        <div className={styles["agent-list"]}>
          <div className={styles["agent-card"]}>
            <img src="/betty.jpg" alt="betty" width="80" />
            <p>Betty polycarp</p>
            <p>Expertise_software engineering</p>
          </div>
          <div className={styles["agent-card"]}>
            <img src="/victor.jpg" alt="victor" width="80" />
            <p>victor Ioryisa</p>
            <p>Expertise_motion graphics</p>
          </div>
          <div className={styles["agent-card"]}>
            <img src="/agama.jpg" alt="agama" width="80" />
            <p>Donald Agama</p>
            <p>Expetise_full stack dev</p>
          </div>
          <div className={styles["agent-card"]}>
            <img src="/agbo.jpg" alt="Agbo" width="80" />
            <p>Miracle Agbo</p>
            <p>Expertise_Designer</p>
          </div>
        </div>
      </section>

      
      <section className={styles.cta}>
        <h2>Take a step today</h2>
        <p>lets change algorithms and chaos into clean solutions,we bring dreams to reality beyond pasionate dreams.</p>
        <button>Browse our recent projects</button>
      </section>
    </div>
  );
}